const fs = require('fs');

const config = fs.readFileSync('config.json');
const configJSON = JSON.parse(config);

// console.log('mssql - config', configJSON);

module.exports = configJSON;
