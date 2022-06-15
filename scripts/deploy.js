const { exec: _exec } = require('child_process');
const path = require('path');
const chalk = require('chalk');
const { promisify } = require('util');
const exec = promisify(_exec);

(async () => {
  console.log("Deploying...");
  process.chdir(path.join(__dirname, '../deploy'));
  const result = await exec('kubectl apply -k base');
  console.log(result.stdout);
  console.log(chalk.red(result.stderr));
})();
