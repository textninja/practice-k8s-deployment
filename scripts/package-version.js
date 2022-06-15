const path = require('path');
const { readFileSync } = require('fs');

const package = JSON.parse(
  readFileSync(
    path.join(
      __dirname,
      '../package.json'
    ),
    'utf-8'
  )
);

module.exports = package.version;
