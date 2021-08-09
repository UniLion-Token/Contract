# UniLion Token

Deployment configuration are stored in the hardhat.config.js file, when deploying you will need to use one of the networks specified in this file.


## Pre-requisites
1) Install NPM Modules:
```
npm i
```
2) Create a secrets.json file with the following (to export go to metamask -> Account -> Account Details -> Export Private key):
```
{
  "testnet": {
    "key": "your private key exported from metamask",
    "url": "https://data-seed-prebsc-1-s1.binance.org:8545"
  }
}
```

## Deploy
Deploy with Hardhat onto testnet with either of these commands:
```
npm run deploy:qa
```
```
npx hardhat run --network testnet scripts/deploy.js
```
## Tests
To test the contract:
```
npx hardhat test 
```

### Add test liquidity
1. Add BNB to your testnet wallet
> https://testnet.binance.org/faucet-smart

2. Use testnet compatible Pancakeswap to add liquidity (if none there):
> https://pancake.kiemtienonline360.com/#/swap

3. Confirm contract on BscScan. Ensure liquidity added

4. Trade on Pancakeswap

