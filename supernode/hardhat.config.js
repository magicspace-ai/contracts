require("@nomiclabs/hardhat-waffle");

require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
//require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

require('hardhat-contract-sizer',{
  runOnCompile: true
});

require('hardhat-abi-exporter', { path: './data/abi', clear: true });
//require("")

const { 
  accountPrivateKey,
  account2PrivateKey,
  etherscanAPIKey,
  alchemyApi
} = require(__dirname+'/.secrets.js');


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  networks: {

    hardhat: {
      accounts: [
        {privateKey: `0x${accountPrivateKey}`, balance: "99991229544000000000000"},
        {privateKey: `0x${account2PrivateKey}`, balance: "99991229544000000000000"}
      ],

      chainId: 1337,
      loggingEnabled: false,
      //mining: {
        //auto: true,
        //interval: [1000, 5000]
      //},
      
      allowUnlimitedContractSize: true,

    },

    bsc_testnet: {
      url:  `https://bsc-testnet.nodereal.io/v1/3ef34a1d51e744ecae5d87d197e4e371`,
      chainId: 97,
      accounts: [`0x${accountPrivateKey}`],
    },

    // polygon testnet 
    polygon_testnet: {
      url:   "https://rpc.ankr.com/polygon_mumbai", 
      chainId: 80001,
      accounts: [`0x${accountPrivateKey}`],
    },
    
    // polygon testnet 
    avax_testnet: {
      url:     `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: [`0x${accountPrivateKey}`]
    }

  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanAPIKey
  },

  solidity: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
  },

  mocha: {
    timeout: 100_000_000
  }
}

