/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import "@nomiclabs/hardhat-waffle";
import "ethereum-waffle";
import "chai";
import "@nomiclabs/hardhat-ethers";
import "ethers";
import { task } from "hardhat/config";

task("hello", "Prints 'Hello, World!'", async () => {
  console.log("Hello, World!");
});

export default {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
};
