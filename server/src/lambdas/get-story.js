const { get } = require('../utils/dynamo-client');
const tableNames = require('../constants/table-names');

exports.handler = async (event) => {
  console.log(`GET Lambda triggered`);
};
