import React, { useEffect, useState } from 'react';
// import Spinner from '../components/primitives/Spinner';
import Spinner from '@components/primitives/Spinner';
import { ethers } from 'ethers';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { loadNfts } from '@pages/api/loadNfts';
import { buyNft } from '@pages/api/buyNft';

function Home() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadNfts().then(function(result) {
      setItems(result)
      setLoading(false)
    })
  }, [])

  if (loading) return <Spinner />;

  if (items.length == 0) return <h1>No items for sale</h1>;

  // if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {items.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <img src={nft.image} />
              <div className="p-4">
                <p style={{ height: '64px' }} className="text-2xl font-semibold">
                  {nft.name}
                </p>
                <div style={{ height: '70px', overflow: 'hidden' }}>
                  <p className="text-gray-400">{nft.description}</p>
                </div>
              </div>
              <div className="p-4 bg-black">
                <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => buyNft(nft)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Home;
