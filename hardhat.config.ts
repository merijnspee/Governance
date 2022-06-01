/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import "@nomiclabs/hardhat-waffle";
import "ethereum-waffle";
import "chai";
import "@nomiclabs/hardhat-ethers";
import "ethers";

export default {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
};
