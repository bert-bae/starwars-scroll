const short = require('shortid');
const { create } = require('../utils/dynamo-client');
const tableNames = require('../constants/table-names');

exports.handler = async (event) => {
  console.log(`POST Lambda triggered`);
  const result = {
    statusCode: 200,
    data: null,
    error: null,
  };
  const body = event.body ? JSON.parse(event.body) : null;

  if (!body) {
    console.log('Event body is missing');
    return {
      ...result,
      error: `Event body is missing`,
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
    data: params,
  };
};