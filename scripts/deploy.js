
const hre = require("hardhat");
const snipers = require("../config/snipers.json"); //// List of front-runner & sniper bots from t.me/FairLaunchCalls

async function main() {
  const contractName = "UniLion";
  const [ deployer ] = await hre.ethers.getSigners();
  const network = await hre.ethers.provider.getNetwork()                                          // needs to be this router address for testnet in order for swapbnb to work
  const routerAddress = (network.name == "bnb") ? "0x10ED43C718714eb63d5aA57B78B54704E256024E" : "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3" // or testnet: 0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3, 0xD99D1c33F9fC3444f8101754aBC46c52416550D1
  const balance = await deployer.getBalance();
  console.log(`Deploying on network: ${network.name}, using router address ${routerAddress}`)
  console.log(`Deploying Contract with Account: ${deployer.address}`) 
  console.log(`Account Balance: ${balance.toString()}`) 
  const contract = await hre.ethers.getContractFactory(contractName);
  const unilion = await contract.deploy(routerAddress, snipers.addresses);
  await unilion.deployed();
  console.log("UniLion Contract Deployed:", unilion.address);
  if (network.name != 'unknown') {
    let blockchainHost = (network.name != 'bnbt') ? "bscscan.com" : "testnet.bscscan.com"
    console.log(`Contract URL: https://${blockchainHost}/address/${unilion.address}`)
  }
  console.log(`Console Script: const token = await (await ethers.getContractFactory("${contractName}")).attach("${unilion.address}")`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
