import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();
const privateKey = process.env.PRIVATE_KEY;

// NOTE: Demo task function
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
/* task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
}); */




// NOTE: It is best to use priv key, but in case dev wishes to use mnemonics
// const fs = require('fs');
/* function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
      console.log("failed to read mnemonic");
  }
  return "";
} */

//NOTE: Debugger
/* const DEBUG = false;
function debug(text: String) {
  if (DEBUG) {
    console.log(text);
  }
} */


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    /* polygon_mumbai_testnet: {
      url: "https://speedy-nodes-nyc.moralis.io//polygon/mumbai",
      accounts:[privateKey],
    }, */
    // polygon_mainnet: {},
    /* avalanche_testnet_fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43113,
      accounts: []
    },
    avalanche_mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43114,
      accounts: []
    } */

    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        privateKey !== undefined ? [privateKey] : [],
    },
  },
};

export default config;
