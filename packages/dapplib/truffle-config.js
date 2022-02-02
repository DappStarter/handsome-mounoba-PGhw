require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember pupil install inflict sudden select'; 
let testAccounts = [
"0x913d1657c3f197ac91433ae9a96727d23fd5beb6e0754809963206f9dba28088",
"0xd0f542e6bbba0706f22decdb8794bca3a0c2e6e2f7223e6108318cfd2e7d5a21",
"0x58bfad4ffdc6e04a220e299d4f884fa188379e5a8989aae460e9880feb08e4d5",
"0xa988e089d5851b3e501726ac1d16d5e8ad84bc7c07b8289e877aac4fd4232dd2",
"0xd8d34a77ecdca91d54e4628cfea95971b348e904d595b3038801bc26ef6d5ce2",
"0x34518da24c9e23497b01843f822575c6b5bad0f966f69f71b3d4bf8865fe7dc3",
"0x955f4ab8d00f2a03b5e474dc47898197ce9811a019ce4fbfee1f12677a832f94",
"0x9105893a4f1c0dc0adc8da72b4745ca7a6f8b3e3a43914da994f84a92cc84cf8",
"0xb22a312d40d73a8395b7dad0019cd977e08d1332dfd554af7852fa3ba4e2beec",
"0x51e294cccfb1a7b2f87373b381124492ccb9bdb6a451d1684ed4ee77e28f6ab7"
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

