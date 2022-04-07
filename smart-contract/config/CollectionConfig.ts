import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SVTFoundersCard',
  tokenName: 'SVT Founders Card',
  tokenSymbol: 'SVT',
  hiddenMetadataUri: 'ipfs://QmU5jcqsbr6ZnzL4yHo9fyYdzkt2QT33KB5qFKvkqdnNEy/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 50,
  },
  preSale: {
    price: 0.25,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.75,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xc679f12eb81336C42C63A63C8e0DC8e80854b31E",
  marketplaceIdentifier: 'svt-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
