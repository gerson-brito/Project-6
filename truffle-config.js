const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
      goerli: {
        network_id: 5,
        gasPrice: 100000000000,
        provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\gerso\\Desktop\\Curso Blockchain\\TokenProject\\test\\testgdsagf.env', 'utf-8'), "https://goerli.infura.io/v3/9349493a67f248e4a74973f8da3b7f77")
      }
  },
  compilers: {
    solc: {
      version: "^0.8.17"
    }
  }
};
