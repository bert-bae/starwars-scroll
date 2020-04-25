const { update } = require('../utils/dynamo-client');
const tableNames = require('../constants/table-names');

exports.handler = async (event) => {
  console.log(`PUT Lambda triggered`);
};
