// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BaraToken {

    uint256 public totalSupply;
    string public name = "Mikel";
    string public symbol = "BARA";
    string public standard = "BARA Token v.10";
    mapping(address => uint256) public balanceOf;

    constructor (uint256 _initialSupply) {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply; //1 million
    }

}