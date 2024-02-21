const chain = require("../chain/index");

exports.getChainConfigData = async (req, res) => {
  const result = await chain.fetchData();
  return res.json({"config": result});
};
