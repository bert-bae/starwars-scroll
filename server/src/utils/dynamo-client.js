const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: `https://dynamodb.${process.env.AWS_REGION}.amazonaws.com`,
});

const docClient = new AWS.DynamoDB.DocumentClient();

const get = async (params) => {
  try {
    return await docClient.get(params).promise();
  } catch (err) {
    throw new Error(`Unable to read item: ${JSON.stringify(err, null, 2)}`);
  }
};

const create = async (params) => {
  try {
    return await docClient.put(params).promise();
  } catch (err) {
    throw new Error(`Unable to create item: ${JSON.stringify(err, null, 2)}`);
  }
};

const update = async (params) => {
  try {
    return await docClient.update(params).promise();
  } catch (err) {
    throw new Error(`Unable to update item: ${JSON.stringify(err, null, 2)}`);
  }
};

module.exports = {
  get,
  create,
  update,
};
