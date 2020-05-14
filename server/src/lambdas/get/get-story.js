const { get } = require('../../utils/dynamo-client');
const {
  isWhitelisted,
  constructResponse,
} = require('../../utils/request-helpers');
const tableNames = require('../../constants/table-names');

exports.handler = async (event) => {
  console.log(`GET Lambda triggered`);
  const isWhitelist = await isWhitelisted(event.headers.Host);
  if (!isWhitelist) {
    return constructResponse(
      {
        error: 'Access denied: Domain is not whitelisted.',
      },
      404
    );
  }

  const pathParams = event.pathParameters;

  const params = {
    TableName: tableNames.Stories,
    Key: {
      short_id: pathParams.shortId,
    },
  };
  const story = await get(params);

  console.log(`GET story... ${JSON.stringify(story, null, 2)}`);

  return constructResponse(story, 200);
};
