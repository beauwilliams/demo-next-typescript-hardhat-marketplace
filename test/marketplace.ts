import { ethers } from "hardhat"
import { expect } from "chai"

let market:any;
let marketAddress:string;
let nft:any;
let nftAddress:string;

beforeEach(async ()=>{
  const Market = await ethers.getContractFactory("Market");
    market = await Market.deploy();
    await market.deployed();

    marketAddress = market.address;

    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy(marketAddress);
    await nft.deployed();
    nftAddress = nft.address;
})

describe("MarketPlace", () => {
  it("Should deploy marketplace and NFT contracts", async () => {
    const nftMarketAddress = await nft.getContractAddress();

    expect(nftMarketAddress).to.equal(marketAddress)
  });

  it("Should have a listing price", async () => {
    const listingPrice = await market.getListingPrice();

    const expectedListingPrice = ethers.utils.parseEther('0.001')

    expect(listingPrice).to.equal(expectedListingPrice)

  });

  it("Should create market item", async () => {
    await nft.createToken("www.mytoken.com")

    const listingPrice = await market.getListingPrice();

    const itemPrice = ethers.utils.parseUnits('100', 'ether')

    await market.createMarketItem(nftAddress, 1, itemPrice, {value: listingPrice})

    const createdItem = await market.fetchSingleItem(1);

    expect(createdItem.price).to.equal(itemPrice)
  });

  it("Should create market sale", async () => {
    const [marketPlaceOwner, sellerAddress, buyerAddress] = await ethers.getSigners();

    await nft.connect(sellerAddress).createToken("www.mytoken.com")

    const listingPrice = await market.getListingPrice();

    const auctionPrice:any = ethers.utils.parseEther('100')

    await market.connect(sellerAddress).createMarketItem(nftAddress, 1, 100, {value: listingPrice})

    await expect(await market.connect(buyerAddress)
      .createMarketSale(nftAddress, 1, {value: 100}))
      .to.changeEtherBalance(buyerAddress, -100)
      .to.changeEtherBalance(sellerAddress, 100)
      .to.changeEtherBalance(marketPlaceOwner, listingPrice)
  });

  it("Should update market item price", async () => {
    await nft.createToken("www.mytoken.com")

    const listingPrice = await market.getListingPrice();

    const initialPrice = ethers.utils.parseUnits('100', 'ether')

    await market.createMarketItem(nftAddress, 1, initialPrice, {value: listingPrice})

    const updatedPrice = ethers.utils.parseUnits('150', 'ether')

    await market.updateMarketItemPrice(1, updatedPrice)

    const updatedItem = await market.fetchSingleItem(1)

    expect(updatedItem.price).to.equal(updatedPrice)
  });

  it("should not update price if requester is not seller", async () => {
    const [marketplaceOwner, sellerAddress, nonAuthorizedPerson] = await ethers.getSigners();

    await nft.connect(sellerAddress).createToken("www.mytoken.com")

    const listingPrice = await market.getListingPrice();

    await market.connect(sellerAddress).createMarketItem(nftAddress, 1, 100, {value: listingPrice})

    await expect(market.connect(nonAuthorizedPerson).updateMarketItemPrice(1, 150))
      .to.be.reverted

    await expect(market.connect(marketplaceOwner).updateMarketItemPrice(1, 150))
      .to.be.revertedWith("Only the product can do this operation");
  })

  it("should allow buyer to resell an owned item", async () => {
    const [, creator, buyer] = await ethers.getSigners();

    await nft.connect(creator).createToken("www.mytoken.com")

    const listingPrice = await market.getListingPrice();

    await market.connect(creator).createMarketItem(nftAddress, 1, 100, {value: listingPrice})

    const unsoldItem = await market.fetchSingleItem(1)

    await market.connect(buyer).createMarketSale(nftAddress, 1, {value: 100})

    await market.connect(buyer).putItemToResell(nftAddress, 1, 150, {value: listingPrice})

    const item = await market.fetchSingleItem(1)

    expect(item.owner).to.equal(unsoldItem.owner);
    expect(item.seller).to.equal(buyer.address)
    expect(item.creator).to.equal(creator.address)
  })
});
