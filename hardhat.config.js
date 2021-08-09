require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
const secrets = require('./secrets.json');

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "testnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    testnet: {
      url: secrets.testnet.url,
      accounts: [secrets.testnet.key],
      chainId: 97,
      live: true,
      tags: ["staging"],
      saveDeployments: true
    },
    mainnet: {
      url: secrets.mainnet.url,
      accounts: [secrets.mainnet.key],
      chainId: 56,
      live: true,
      saveDeployments: true
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true
      }
     }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};