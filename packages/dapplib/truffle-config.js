require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth oval clutch hunt merry flame travel'; 
let testAccounts = [
"0x277fd151c5e3dab14ce6c4b99b0daf86f9dec8226dfef3b8852396331315145d",
"0x741a9ce7f334d63c4af0d1c3dbe4f133320e6f329deec3bee33ef0d09246af6a",
"0x3b698fab5145b6a154e78cfe6e4217248085d77c26abf85fa9cc47a247308ff7",
"0x1bea49f025ea476f1298a17111851b17751058fe64486264e0d7826de8c4b7fc",
"0xf2205044e3d99ca63866d52a2af41f03a7333a6fbfb293f9ef843dccf160fb1d",
"0x000d7541cb15c552fb5b80ea68e58029e8bb90849581bdc944590fbf88e09916",
"0xc571a93540999ea9d1f42d28a76f9190921ce36eea0a1ada70aaae21d0beeb76",
"0x2882d73ee7a2406a3db6b250a84871e1e0468f4896239461c1f52a8d3f5002df",
"0xd9f2b80b1c28f46a3171395bc4a7fd67cf07201ae7a9fde247008f4a2ba94557",
"0x6dab5e672225b89c63505f38734caa87aaf3f0159d85ff4648589966a50cfcd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

