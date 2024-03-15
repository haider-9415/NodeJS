/*
    C --> create
    R --> read
    U --> update
    D --> delete

*/

// we will create files in folder named 'crud'
const fs = require('fs')
const path = require('path')
console.log('\n__dirname -->', __dirname, '\n');

const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/file1.txt`
console.log('dirPath -->', dirPath, '\n');


/* to create and write a file */
// fs.writeFileSync(filePath, "this is a txt file")


// we will read directory 'crud', i.e., we will show all files in the folder on cmd
fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.log(item);
    })
    console.log();
})


/* to read the file */
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log('file content:');
//     console.log(item, '\n');
// })


/* to update the file */
// fs.appendFile(filePath, " and file name is file1.txt", (err) => {
//     if (!err) console.log('File is updated ;)\n');
// })


/* we can change the file name */
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) console.log('file name is updated ;)\n');
// })


/* to delete the file */
// fs.unlinkSync(`${dirPath}/fruit.py`)