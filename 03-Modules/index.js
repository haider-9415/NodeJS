// global modules are those modules we don't need to import them
// for example
console.log('global module');


// global modules are those modules we need to import them
// for example, fs module is used to file handling in JS
const fs = require('fs')
fs.writeFileSync("file1.txt", "non-global module")
fs.writeFileSync("file2.txt", "non-global module")


