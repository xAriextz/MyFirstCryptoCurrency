// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BaraToken {

    uint256 public totalSupply;
    string public name = "Mikel";
    string public symbol = "BARA";
    string public standard = "BARA Token v.10";

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 value
    );

    mapping(address => uint256) public balanceOf;

    constructor (uint256 _initialSupply) {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply; //1 million
    }

    function transfer(address _to, uint256 _value) public returns (bool success){
        require(balanceOf[msg.sender] >= _value);
        
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;

    }

}