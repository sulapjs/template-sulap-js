#! /usr/bin/env node


// console.log(__dirname, '----curent file location')
// console.log(process.cwd(), '-------- current work direcctory')
const fs = require('fs')
const path = require('path')
const yargs = require('yargs')
const ora = require('ora');
let spinner = ora()

const { copyDirectory } = require('./duplicateDir')
const { runShellCommand } = require('./shell')

//console.log(process.cwd().toString(), '-----current work directory')

function createFolder(folderName) {
    var dirJoin = path.join(process.cwd(), folderName);

    // console.log(dir, '-----processcwd')
    // console.log(dirJoin, '====== cwd join server')
    if (!fs.existsSync(dirJoin)){
        fs.mkdirSync(dirJoin);
    }
}

// const packageJSONsource = path.join(process.cwd(), './package.json')


require('yargonaut')
    .style('blue')
    .style('yellow', 'required')
    .helpStyle('green')
    .errorsStyle('red')
    
yargs.version('0.1')


yargs.command({
    command: 'jreng',
    describe: 'buat server dan client',
    type: String,
    handler: (argv) => {
    
        spinner.spinner = 'moon'
        spinner.text = 'creating server and client'
        spinner.start()
        
        try{
            if(argv.name == true){
                spinner.stop()
                throw new Error('model perlu nama')
            } else if (argv.name === '') {
                spinner.stop()
                throw new Error('nama project ga boleh string kosong')
            } else {
                createFolder(`./${argv.name}`)
                createFolder(`./${argv.name}/clientTest`)
                createFolder(`./${argv.name}/serverTest`)
                copyDirectory('../server',`./${argv.name}/serverTest`)
                copyDirectory('../client',`./${argv.name}/clientTest`)
                spinner.succeed()

                let packageJSONdestination = path.join(process.cwd(), `./${argv.name}/serverTest`)
                runShellCommand(`npm --prefix ${packageJSONdestination} install ${packageJSONdestination}`)

                packageJSONdestination = path.join(process.cwd(), `./${argv.name}/clientTest`)
                runShellCommand(`npm --prefix ${packageJSONdestination} install ${packageJSONdestination}`)

                spinner.succeed()
            }
        } catch(err){
            console.log(err)
        }
    }
})


yargs.command({
    command: 'bikinin',
    describe: 'bikinin model dll',
    builder: {
        model: {
            type: 'string',
            demandOption: true
        },
        attributes: {
            type: 'string',
            demandOption: true
        }
    },
    handler: argv => {
        try {
            if (argv.model === true) {
                throw new Error('model perlu nama')
            } else if (argv.model === '') {
                throw new Error('nama model ga boleh string kosong')
            } else if (argv.attributes === true) {
                throw new Error('attributes perlu nama')
            } else if (argv.attributes === '') {
                throw new Error('attributes ga boleh string kosong')
            }

            let modelItems = argv.attributes.split(',')

            let modelObject = modelItems.map(el => {
                const [name, type] = el.split(':')

                if (name === '') {
                    throw new Error('invalid name')
                }

                if (
                    type.toLowerCase() !== 'string' &&
                    type.toLowerCase() !== 'boolean' &&
                    type.toLowerCase() !== 'number' &&
                    type.toLowerCase() !== 'float'
                ) {
                    throw new Error('invalid type')
                }

                readAndReplace('../models/test-model.js', `${name}: ${type}`)
            })

            console.log(modelObject)
            console.log('model dibuat')
        } catch (error) {
            console.log(error.message)
        }
    }
})


yargs.argv