const fs = require('fs')
const path = require('path')


function createModelDetailsClient(readContent, NameModel) {
    const dirJoin = path.join(__dirname, readContent)
    // console.log(dirJoin)

    const stringTemplateComponents = 
    `import ${ NameModel[0].toUpperCase()+NameModel.slice(1,NameModel.length).toLowerCase() } from './${NameModel[0].toUpperCase+NameModel.slice(1,NameModel.length).toLowerCase() }' \nimport ${ NameModel[0].toUpperCase()+NameModel.slice(1,NameModel.length).toLowerCase()}Detail from './${NameModel[0].toUpperCase+NameModel.slice(1,NameModel.length).toLowerCase() }Detail'
    `

    const stringTemplateRoute = 
    `else if(linkPath === '${NameModel.toLowerCase()}') {
        return (
            <>
                <${ NameModel[0].toUpperCase()+NameModel.slice(1,NameModel.length).toLowerCase() }  />
            </>
        )
     } else if(linkPath === '${NameModel.toLowerCase()}-detail') {
        return (
            <>
                <${ NameModel[0].toUpperCase()+NameModel.slice(1,NameModel.length).toLowerCase()}Detail />
            </>
        )
     }`

    const read = fs.readFileSync(dirJoin, 'utf8')
    let replaced = read.replace(/\/\/add-new-route/i, `${stringTemplateRoute}\/\/add-new-route`)
    replaced = replaced.replace(/\/\/new-component/i, `${stringTemplateComponents}\n\/\/new-component`)
    console.log(replaced)
    //fs.writeFileSync('./testingModelInfo.js', replaced)
}

createModelDetailsClient('./lib/templateDashboardContent.js', 'Article')

module.exports = createModelDetailsClient