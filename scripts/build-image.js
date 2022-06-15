const version = require('./package-version');
const util = require('util');
const path = require('path');
const { exec: _exec } = require('child_process');
const exec = util.promisify(_exec);

(async () => {
  process.chdir(path.join(__dirname, '../app'));
  console.log("Building...");
  await exec('docker build -t textninja/hello .');
  await exec(`docker tag textninja/hello textninja/hello:${version}`);
})();
