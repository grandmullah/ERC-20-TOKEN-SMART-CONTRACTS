var EToken =artifacts.require("./EToken.sol");

module.exports = function(deployer){
    deployer.deploy(EToken,1000000);
};