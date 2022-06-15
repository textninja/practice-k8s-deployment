const version = require('./package-version');
const chalk = require('chalk');
const { promisify } = require('util');
const { exec: _exec } = require('child_process');
const exec = promisify(_exec);

(async () => {
  console.log('Pushing to latest...')
  var { stderr, stdout } = await exec('docker push textninja/hello:latest');
  console.log(stdout);
  console.log(chalk.red(stderr));
  console.log(`Pushing to ${version}...`);
  var { stderr, stdout } = await exec(`docker push textninja/hello:${version}`);
  console.log(stdout);
  console.log(chalk.red(stderr));
})();
