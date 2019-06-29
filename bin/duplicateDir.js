const path = require('path')
const fse = require('fs-extra')
const ora = require('ora')
let spinner = ora()

function copyDirectory(relativeSource, relativeDest){
    spinner.text = 'copying'
    spinner.spinner = 'simpleDots'
    spinner.start()
    const sourcePath = path.join(__dirname, relativeSource)
    const destiationPath = path.join(process.cwd(), relativeDest)
    fse.copy(sourcePath, destiationPath)
    .then(() => {
        //console.log('berhasil copy server')
        spinner.succeed()
    })
    .catch( err => {
        console.log(err)
    })
}

module.exports = { copyDirectory }
