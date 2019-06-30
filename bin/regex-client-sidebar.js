const fs = require('fs')
const path = require('path')


function editSidebarClient(pathTemplate, modelStructure) {
    const dirJoin = path.join(__dirname, pathTemplate)
    // console.log(dirJoin)

    const read = fs.readFileSync(dirJoin, 'utf8')
    const replaced = read.replace(/\/\*sidebar-menu\*\//i, `'${modelStructure}'`)

    fs.writeFileSync('./testingModelInfo.js', replaced)
}

editSidebarClient('./lib/templateSidebarDashboard.js', 'Article')

// module.exports = createModelDetailsClient