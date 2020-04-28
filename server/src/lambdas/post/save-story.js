const short = require('shortid');
const { isWhitelisted } = require('../../utils/request-helpers');
const { create } = require('../../utils/dynamo-client');
const tableNames = require('../../constants/table-names');

exports.handler = async (event) => {
  console.log(`POST Lambda triggered`);
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

  const body = event.body ? JSON.parse(event.body) : null;

  if (!body) {
    console.log('Event body is missing');
    return {
      ...result,
      body: JSON.stringify({
        error: `Event body is missing`,
      }),
    };
  }

  const params = {
    TableName: tableNames.Stories,
    Item: {
      short_id: short.generate(),
      title: body.title,
      subheader: body.subheader,
      content: body.content,
    },
  };
  await create(params);

  console.log(`New story created... ${JSON.stringify(params, null, 2)}`);

  return {
    ...result,
    body: JSON.stringify(params),
  };
};
