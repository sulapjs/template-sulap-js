const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ora = require('ora');
let spinner = ora();

async function runShellCommand(command) {    
    spinner.text = 'installing depedency'
    spinner.spinner = 'moon';
    spinner.start()
    const { stdout, stderr } = await exec(command);
    // console.log('stdout:', stdout);
    // console.log('stderr:', stderr);
    spinner.text = 'installing success'
    spinner.succeed()
}

module.exports = { runShellCommand }
