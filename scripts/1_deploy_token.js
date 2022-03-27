const { dexRouterAddress, devAddress } = require('../.secrets.json');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Token = await ethers.getContractFactory("WrappedCoinflectToken");
  const token = await Token.deploy(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    42000000000000000000000000000
  );
  console.log("Token address:", token.address);
}
  
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });