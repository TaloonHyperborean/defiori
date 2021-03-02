const Router = artifacts.require("UniswapV2Router02.sol")
const WETH=artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth
    const Factory_address="0x84A022f98e57D59b5ACa01328F642087bA538090"
    
    if(network==='mainnet'){
        weth=await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
    }else{
        await deployer.deploy(WETH)
        weth=await WETH.deployed()
    }

    await deployer.deploy(Router,Factory_address,weth.address)
    
};
