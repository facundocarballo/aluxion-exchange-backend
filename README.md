# silky_exchange_backend

## /eth-balance
This endpoint needs two arguments to work properly.

- rpc
> URL to connect with a particular node of a specific blockchain.

- address
> Address of the wallet that want to see the balance.

This endpoint returns the balance in crypto of the wallet in the blockchain that the node is running on.

### Example
```bash
    curl "http://localhost:8088/eth-balance?address=0x9060723c22dE586c2fA5eFa07A7743F6f4a935f5&rpc=https://polygon-rpc.com"
```

##### Arguments used
- address = 0x9060723c22dE586c2fA5eFa07A7743F6f4a935f5
- rpc = https://polygon-rpc.com

> This have to returned something like this in your browser.
![ETH Balance example with curl](https://i.ibb.co/Xppg04z/curl-request-eth-balance.png)
![ETH Balance example](https://i.ibb.co/RPPttGk/ETH-BALANCE.png)
In this case we are seeing the amount of MATIC that this wallet has.

---

## /erc20-balance
This endpoints needs three arguments to work properly.

- rpc
> URL to connect with a particular node of a specific blockchain.

- address
> Address of the wallet that want to see the balance.

- contractAddress
> Address of the ERC20 Contract that we want to see the balance of.

This endpoint returns the balance of the wallet in some ERC20 on the blockchain that the node is running on.

### Example
```bash
    curl "http://localhost:8088/erc20-balance?address=0x9060723c22dE586c2fA5eFa07A7743F6f4a935f5&rpc=https://polygon-rpc.com&contractAddress=0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
```

#### Arguments used
- address = 0x9060723c22dE586c2fA5eFa07A7743F6f4a935f5
- rpc = https://polygon-rpc.com
- contractAddress = 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063

> This have to returned something like this in your browser.
![ERC20 Balance example with curl](https://i.ibb.co/n3zm7qC/curl-request-erc20-balance.png)
![ERC20 Balance example](https://i.ibb.co/t4vkmKN/erc20-balance.png)
In this case we are seeing the amount of DAI that this wallet has on the Polygon Blockchain.


---

## How to use it?
1. Install all the dependencies
```bash
    npm install
```

2. Make sure that the server is running.
```bash
    node app.js
```
![Server running](https://i.ibb.co/GTmbzzz/node-js-server-listening.png)

3. Make some GET REQUEST to this endpoints
    - '/eth-balance'
    - '/erc20-balance'
Following the examples mentioned above

# Resources
## RPCs
| Blockchain | RPC |
| ------------ | ------------ |
| Ethereum | https://eth.llamarpc.com |
| Binance Smart Chain | https://binance.llamarpc.com |
| Polygon Mainnet | https://polygon-rpc.com/ |

## ERC20 Contracts
| Blockchain | ERC20 | Contract Address |
| ------------ | ------------ | ------------ |
| Binance Smart Chain | USDT | 0x55d398326f99059fF775485246999027B3197955 |
| Binance Smart Chain | USDC | 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d |
| Binance Smart Chain | DAI | 0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3 |
| Binance Smart Chain | BUSD | 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56 |
| Ethereum | USDT | 0xdAC17F958D2ee523a2206206994597C13D831ec7 |
| Ethereum | USDC | 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 |
| Ethereum | DAI | 0x6B175474E89094C44Da98b954EedeAC495271d0F |
| Polygon Mainnet | USDT | 0xc2132D05D31c914a87C6611C10748AEb04B58e8F |
| Polygon Mainnet | USDC | 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174 |
| Polygon Mainnet | DAI | 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063 |
| Polygon Mainnet | BUSD | 0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7 |

## Wallets
You can use any wallet that you want, but here I let you some wallets so you can use it.
- 0xF977814e90dA44bFA03b6295A0616a897441aceC
    > Holder with most USDT on Ethereum Mainnet
- 0xF977814e90dA44bFA03b6295A0616a897441aceC
    > Holder with most BUSD on Binance Smart Chain
- 0x9060723c22dE586c2fA5eFa07A7743F6f4a935f5
    > Personal wallet with 31.78 DAI on Polygon Mainnet