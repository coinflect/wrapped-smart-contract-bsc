// hardhat.config.js
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/types";

const { mainnetAccount, testnetAccount, localhostDeployAccount } = require('./.secrets.json');

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat", 
  solidity: {
      compilers: [{ version: "0.8.9", 
      settings: {
        optimizer : { enabled: true, runs: 1500}
      } 
    }],
  },
  networks: {
    localhost: {
        url: "http://localhost:8545",
        accounts: [localhostDeployAccount]
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [testnetAccount]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [mainnetAccount]
    }
  }
};
      
export default config;