// we will create files in folder named 'files'

const fs = require('fs')
const path = require('path')
console.log('\n__dirname -->', __dirname, '\n');

const dirPath = path.join(__dirname, 'files')
console.log(' dirPath -->', dirPath, '\n');

for (i=1; i<6; i++){
    fs.writeFileSync(`${dirPath}/file-${i}.txt`, "this is a txt file")
}


// we will read directory 'files', i.e., now we will show all files in the folder on cmd
fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.log(item);
    })
    console.log();
})