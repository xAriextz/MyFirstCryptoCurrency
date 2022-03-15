//We number the files like this to keep the order for truffle

const BaraToken = artifacts.require("BaraToken");

module.exports = function (deployer) {
  deployer.deploy(BaraToken, 1000000);
};
