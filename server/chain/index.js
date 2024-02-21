const ethers = require("ethers");

// ABI for the method we wish to invoke (getConfig)
const methodAbi = {
  inputs: [],
  name: "getConfig",
  outputs: [
    {
      internalType: "uint16",
      name: "minimumRequestConfirmations",
      type: "uint16",
    },
    {
      internalType: "uint32",
      name: "maxGasLimit",
      type: "uint32",
    },
    {
      internalType: "uint32",
      name: "stalenessSeconds",
      type: "uint32",
    },
    {
      internalType: "uint32",
      name: "gasAfterPaymentCalculation",
      type: "uint32",
    },
  ],
  stateMutability: "view",
  type: "function",
};

exports.fetchData = async () => {
  // connect to sepolia testnet provider for demo purposes
  const provider = ethers.getDefaultProvider(
    "https://rpc.ankr.com/eth_sepolia"
  );

  // initialize the contract
  const address = "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625";
  let contract = new ethers.Contract(
    address,
    [methodAbi],
    provider
  );

  console.log("Connecting to contract at " + address);

  let result = await contract.getConfig();
  const converted = [];
  // Since some of the numbers returned from the contract are BigInt, we need to serialize them manually
  if (result) {
    for (const num of result) {
      converted.push(Number(num));
    }
  }
  console.log("Contract config fetched: " , converted);
  return converted;
};
