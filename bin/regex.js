
//file dalam bin
const fs = require('fs')
const path = require('path')

const content = 'hehehehe'
const relativePath = './testing_regex.js'

readAndReplace(relativePath, content)

function readAndReplace(relativePath, content) {
    const dirJoin = path.join(__dirname, relativePath)
    //console.log(dirJoin)
    const read = fs.readFileSync(dirJoin, 'utf8')
    //console.log(read, 'before')

    

    const replaced = read.replace(/\/\/product_table([\s\S]*?)\/\/product_table/g, `
        //product_table
        const [ hehe. setHehe ] = useState();
        //product_table`
    )
    console.log(replaced)

    fs.writeFileSync(dirJoin, replaced)
}