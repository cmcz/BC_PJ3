var HDWalletProvider = require('truffle-hdwallet-provider/');
var mnemonic = "";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },


    sepolia: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(mnemonic, "https://sepolia.infura.io/v3/"),
      network_id: '11155111',

      // gas: 4500000, // Gas limit
      gas: 5500000, // Gas limit
      confirmations: 2, // Number of confirmations to wait between deployments (default: 0)
      timeoutBlocks: 200, // Number of blocks before a deployment times out  (minimum/default: 50)

      // networkCheckTimeout: 8000,
      // deploymentPollingInterval: 1800000
    }


    // Sepolia test network
    // sepolia: {
    //   provider: () => new HDWalletProvider({
    //     mnemonic: {
    //       phrase: "typical object purse poet phrase play code jazz festival survey ignore nut",
    //     },
    //     providerOrUrl: 'https://sepolia.infura.io/v3/3df586de0eba421e9bd73750b587cabd',
    //     pollingInterval: 1800000,
    //   }),
    //   network_id: 11155111,
    //   networkCheckTimeout: 8000,
    //   deploymentPollingInterval: 1800000,
    // }
  },
  compilers: {
    solc: {
      version: "0.4.25"
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};