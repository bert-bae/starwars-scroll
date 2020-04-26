const { update } = require('../utils/dynamo-client');
const tableNames = require('../constants/table-names');

exports.handler = async (event) => {
  console.log(`PUT Lambda triggered`);
  const result = {
    statusCode: 200,
    data: null,
    error: null,
  };
  const pathParams = event.pathParameters;
  const body = event.body ? JSON.parse(event.body) : null;

  if (!body) {
    console.log(
      `Update attributes are not specified: ${JSON.stringify(body, null, 2)}`
    );
    return {
      ...result,
      error: 'Update attributes are not specified',
    };
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
    data: params,
  };
};