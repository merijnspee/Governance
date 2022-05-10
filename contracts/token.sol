// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract investorToken is ERC20 {
    uint256 public s_maxSupply = 10000000;

    constructor() ERC20("G360 Investor", "360I") {
        _mint(msg.sender, s_maxSupply);
    }
}