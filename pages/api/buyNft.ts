import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import { nftaddress, nftmarketaddress, rpc_url } from '@cache/deploy.ts';

import NFT from '/artifacts/contracts/NFT.sol/NFT.json';
import Market from '/artifacts/contracts/Market.sol/Market.json';

export const buyNft = async (nft) => {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    // loadNFTs();
  }
