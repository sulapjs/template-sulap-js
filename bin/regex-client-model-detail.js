const fs = require('fs')
const path = require('path')


function createModelDetailsClient(pathTemplate, modelStructure) {
    const dirJoin = path.join(__dirname, pathTemplate)
    // console.log(dirJoin)

    const read = fs.readFileSync(dirJoin, 'utf8')
    const replaced = read.replace(/\/\/model-info/i, `const modelInfo = ${JSON.stringify(modelStructure)} \n`)
    console.log(replaced)
    fs.writeFileSync('./testingModelInfo.js', replaced)
}

// example createModelDetailsClient('./lib/templateModelDetails.txt', { Title:'String', Description:'String'})

module.exports = createModelDetailsClient