const { readFile } = require('fs/promises')
const { join } = require('path');
const DEFAULT_OPTION = {
    maxLines:3,
    fields:["id","name","profession","age"]
}

class File {
    static async csvToJson(filePath){
        const content = await File.getFileContent(filePath)
        return content
    }

    static async getFileContent(filePath){
        const filename = join(__dirname,filePath)
        return (await readFile(filename)).toString("utf8")
    }

    // static isValid(csvString, options = )

}

(async  () => {
    const result = await File.csvToJson('./../mocks/threeItems-valid.csv');
    // const result = await File.csvToJson('./../mocks/threeItems-valid.csv');
    console.log('result',result);
})();


// parei nos 18:07