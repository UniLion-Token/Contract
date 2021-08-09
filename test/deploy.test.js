const { expect } = require("chai");
const hre = require("hardhat");

describe("UniLion", function () {
  it("deploy", async function () {
    const contract = await hre.ethers.getContractFactory("UniLion");
    const pancakeRouterAddress = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1" // testnet
    const unilion = await contract.deploy(pancakeRouterAddress);
    await unilion.deployed();
  });
});
