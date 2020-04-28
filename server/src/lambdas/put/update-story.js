const { update } = require('../../utils/dynamo-client');
const { isWhitelisted } = require('../../utils/request-helpers');
const tableNames = require('../../constants/table-names');

exports.handler = async (event) => {
  console.log(`PUT Lambda triggered`);
  const isWhitelist = await isWhitelisted(event.headers.Host);
  const result = {
    statusCode: 200,
    body: null,
  };

  if (!isWhitelist) {
    return {
      ...result,
      body: JSON.stringify({
        error: 'Access denied: Domain is not whitelisted.',
      }),
    };
  }

  const pathParams = event.pathParameters;
  const body = event.body ? JSON.parse(event.body) : null;

  if (!body) {
    console.log(
      `Update attributes are not specified: ${JSON.stringify(body, null, 2)}`
    );
    return JSON.stringify({
      ...result,
      body: JSON.stringify({
        error: 'Update attributes are not specified',
      }),
    });
  }

  const params = {
    TableName: tableNames.Stories,
    Key: {
      short_id: pathParams.shortId,
    },
    UpdateExpression: 'set content=:c, subheader=:s, title=:t',
    ExpressionAttributeValues: {
      ':c': body.content,
      ':s': body.subheader,
      ':t': body.title,
    },
    ReturnValues: 'UPDATED_NEW',
  };
  await update(params);

  console.log(`Update story ${body.shortId} successfully`);

  return {
    ...result,
    body: JSON.stringify(params),
  };
};
