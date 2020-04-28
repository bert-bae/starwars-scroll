const tableNames = require('../../constants/table-names');
const { isUri } = require('valid-url');
const { create } = require('../../utils/dynamo-client');

exports.handler = async (event) => {
  const result = {
    statusCode: 200,
    body: null,
  };
  const body = event.body ? JSON.parse(event.body) : null;

  if (!body || !body.domain) {
    return {
      ...result,
      body: JSON.stringify({
        error: `Domain are not available to create. Ensure that you are providing the correct 'domain' key with type STRING in the body.`,
      }),
    };
  }
  if (!isUri(body.domain)) {
    return {
      ...result,
      body: JSON.stringify({
        error: `${body.domain} is not a valid Uri`,
      }),
    };
  }

  const domainUrl = body.domain.replace(/(http:\/\/|https:\/\/)/gi, '');
  const params = {
    TableName: tableNames.WhitelistDomains,
    Item: {
      domain_url: domainUrl,
    },
  };
  await create(params);

  return {
    ...result,
    body: `Domain ${domainUrl} has been whitelisted`,
  };
};
