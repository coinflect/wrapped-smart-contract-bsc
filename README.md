WRAPPED COINFLECT (WCFLT) Smart Contract

# Local deployment with Hardhat

## Prerequiste 
* Install Hardhat

## Deployment
```
npm install
npx hardhat node
```

* create .secrets.json from .secrets.json.example
* put first private key from hardat node inside localhostDeployAccount variable
* you must deploy full pancake swap or any other Uniswap clone on your local blockchain
* write dex router address and dev wallet in .secrets.json
* add a custom RPC to localhost:8545, chainId= 31337 and currency name BNB inside metamask

```
npx hardhat run --network localhost scripts/1_deploy_token.js --show-stack-traces
```