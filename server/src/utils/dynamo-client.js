const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const get = (params) => {
  docClient.get(params, (err, data) => {
    if (err) {
      throw new Error(`Unable to read item: ${JSON.stringify(err, null, 2)}`);
    } else {
      console.log(`GetItem successful: ${JSON.stringify(data, null, 2)}`);
      return data;
    }
  });
};

const create = (params) => {
  docClient.put(params, (err, data) => {
    if (err) {
      throw new Error(`Unable to create item: ${JSON.stringify(err, null, 2)}`);
    } else {
      console.log(`CreateItem successful: ${JSON.stringify(data, null, 2)}`);
      return data;
    }
  });
};

const update = (params) => {
  docClient.update(params, (err, data) => {
    if (err) {
      throw new Error(`Unable to update item: ${JSON.stringify(err, null, 2)}`);
    } else {
      console.log(`UpdateItem successful: ${JSON.stringify(data, null, 2)}`);
      return data;
    }
  });
};

module.exports = {
  get,
  create,
  update,
};
