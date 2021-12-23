import React, { useState } from 'react';
import { ethers } from 'ethers'
import axios from 'axios'

import { nftaddress, nftmarketaddress, rpc_url } from '@cache/deploy.ts';

import NFT from '/artifacts/contracts/NFT.sol/NFT.json'
import Market from '/artifacts/contracts/Market.sol/Market.json'

export const loadNfts = async () => {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider(rpc_url)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()

    /*
    *  map over items returned from smart contract and format
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    return items
  }
