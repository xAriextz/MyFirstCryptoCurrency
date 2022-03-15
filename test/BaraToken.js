const _deploy_contracts = require("../migrations/2_deploy_contracts");

var BaraToken = artifacts.require("BaraToken");

contract('BaraToken', function(accounts) {
    it('sets the token total supply upon deployment', function() {
        return BaraToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
    }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1M');
    });
    });
})