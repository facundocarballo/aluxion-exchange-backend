const Web3 = require("web3")
const IERC20 = require("../ABI/ERC20.json");

// RPC
const Contract = require('web3-eth-contract');

const GetETHBalance = async (rpc, address) => {
    const web3 = new Web3(rpc);
    const wei = await web3.eth.getBalance(address);
    return Number(web3.utils.fromWei(wei, 'ether')).toFixed(2);
};

const GetERC20Balance = async (rpc, address, contractAddress) => {
    const web3 = new Web3(rpc);
    Contract.setProvider(rpc);
    const ContractERC20 = new Contract(IERC20.output.abi, contractAddress);
    const wei = await ContractERC20.methods.balanceOf(address).call();
    const decimals = await ContractERC20.methods.decimals().call();
    return Number(web3.utils.fromWei(wei, GetEthUnit(decimals))).toFixed(2);
}

const GetEthUnit = (decimals) => {
    switch (decimals) {
        case 0:
            return "wei";
        case 3:
            return "kwei";
        case 6:
            return "mwei";
        case 9:
            return "gwei";
        case 12:
            return "szabo";
        case 15:
            return "finney";
        case 18:
            return "ether";
        default:
            return "ether";
    }
}

module.exports = {
    GetETHBalance,
    GetERC20Balance,
};