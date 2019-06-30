const fs = require('fs')
const path = require('path')


function createModelClient(pathTemplate, arrayModel, modelName) {
    const dirJoin = path.join(__dirname, pathTemplate)
    const read = fs.readFileSync(dirJoin, 'utf8')

    let stringState = ''
    let stringArrayFunction = []
    let stringObjectState = []

    arrayModel.map( state => {
        stringState += `const [ ${state.toLowerCase()}, set${state[0].toUpperCase()+state.slice(1, state.length)} ] = useState(null) \n`
        stringArrayFunction.push(`set${state[0].toUpperCase()+state.slice(1, state.length)}`)
        stringObjectState.push(state.toLowerCase())
    })

    stringObjectState = stringObjectState.toString()
    stringObjectState = `const stateObj = { ${stringObjectState} } \n`
    stringArrayFunction = `const funcLoop = [${ stringArrayFunction.toString() }] \n`

    let replaced = read.replace(/\/\/model-name/g, modelName)
    replaced = replaced.replace(/\/\/state/i, stringState)
    replaced = replaced.replace(/\/\/function-loop/i, stringArrayFunction)
    replaced = replaced.replace(/\/\/state-object/i, stringObjectState)
    arrayModel = arrayModel.map( el => {
        return `'${el.toString()}'`
    })
    replaced = replaced.replace(/\/\/header-table/i, `const headerTable = [${arrayModel}] \n`)

    fs.writeFileSync('./testing.js', replaced)
}

// example : createModelClient('./lib/templateModel.txt', [ 'Title', 'Description' ], 'Product')

module.exports = createModelClient