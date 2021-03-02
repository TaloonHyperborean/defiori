
const Factory = artifacts.require("UniswapV2Factory.sol");
const Cactus=artifacts.require("Cactus.sol")
const Rose=artifacts.require("Rose.sol")

module.exports = async function (deployer,_network,address){
    await deployer.deploy(Factory,address[0]);
    const factory=await Factory.deployed()

    let cactusAdd,roseAdd;
    if(_network=='mainnet'){

        tokenAdd=""
        token2Add=""

    }else{
        await deployer.deploy(Cactus)
        await deployer.deploy(Rose)
        const cactusToken=await Cactus.deployed()
        const roseToken=await Rose.deployed()
        cactusAdd=cactusToken.address
        roseAdd=roseToken.address
    }
    await factory.createPair(cactusAdd,roseAdd)

};