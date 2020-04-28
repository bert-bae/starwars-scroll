const { get } = require('../../utils/dynamo-client');
const tableNames = require('../../constants/table-names');

exports.handler = async (event) => {
  console.log(`GET Lambda triggered`);
  const result = {
    statusCode: 200,
    body: null,
  };
  const pathParams = event.pathParameters;

  const params = {
    TableName: tableNames.Stories,
    Key: {
      short_id: pathParams.shortId,
    },
  };
  const story = await get(params);

  console.log(`GET story... ${JSON.stringify(story, null, 2)}`);

  return {
    ...result,
    body: JSON.stringify(story),
  };
};
