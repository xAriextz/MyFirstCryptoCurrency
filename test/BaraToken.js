//const _deploy_contracts = require("../migrations/2_deploy_contracts");

var BaraToken = artifacts.require("BaraToken");

contract('BaraToken', function(accounts) {
    var tokenInstance;

    it('initializes the contract with the correct values', function(){
        return BaraToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name,'Mikel','has the correct name');
            return tokenInstance.symbol();
        }).then(function(symbol){
            assert.equal(symbol,'BARA','has the correct symbol');
            return tokenInstance.standard();
        }).then(function(standard){
            assert.equal(standard,'BARA Token v.10','has the correct standard');
        });
    });

    it('allocates the token total supply upon deployment', function() {
        return BaraToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1M');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(adminBalance) {
            assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the inital supply to the admin');
        });
    });
})