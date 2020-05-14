const { get } = require('./dynamo-client');
const { WhitelistDomains } = require('../constants/table-names');

const isWhitelisted = async (host) => {
  if (!host) {
    return false;
  }

  const params = {
    TableName: WhitelistDomains,
    Key: {
      domain_url: host,
    },
  };

  const domains = await get(params);

  if (domains.Item && domains.Item.domain_url) {
    return true;
  }
  return false;
};

const constructResponse = (data, statusCode) => {
  return {
    statusCode,
    body: JSON.stringify(data),
    headers: {
      'Access-Control-Allow-Origin': process.env.ORIGIN_URL,
      'Access-Control-Allow-Credentials': true,
    },
  };
};

module.exports = {
  isWhitelisted,
  constructResponse,
};
