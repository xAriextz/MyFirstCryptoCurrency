//We number the files like this to keep the order for truffle

const BaraToken = artifacts.require("BaraToken");
const BaraTokenSale = artifacts.require("BaraTokenSale");

module.exports = function (deployer) {
  deployer.deploy(BaraToken, 1000000).then(function() {
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BaraTokenSale, BaraToken.address, tokenPrice);
  });
  
};
