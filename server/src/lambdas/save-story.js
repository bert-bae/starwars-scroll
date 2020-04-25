const { uuid } = require('uuidv4');
const { create } = require('../utils/dynamo-client');
const tableNames = require('../constants/table-names');

exports.handler = async (event) => {
  console.log(`POST Lambda triggered`);
  const result = {
    statusCode: 200,
    data: null,
    error: null,
  };
  const body = event.body
    ? typeof event.body === 'string'
      ? JSON.parse(event.body)
      : event.body
    : null;

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
      id: uuid(),
      title: body.title,
      subheader: body.subheader,
      content: body.content,
    },
  };
  const newStory = await create(params);

  console.log(`New story created... ${JSON.stringify(params, null, 2)}`);

  return {
    ...result,
    data: newStory,
  };
};
