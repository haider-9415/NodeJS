/*  we can get input from command line
    
    "process.argv" contains index no. of input in cmd
    0 indx is for 'node'
    1 index is for running file name
    therefore, third parameter has 3 index and so on
*/

// we will create a file named 'fruit' getting input from cmd

const fs = require('fs');

const input = process.argv

// To create file --> add file_name.ext content
// To delete file --> del file_name.ext
if (input[2] == 'add'){
    fs.writeFileSync(input[3], input[4])
}
else if (input[2] == 'del'){
    fs.unlinkSync(input[3])
}
else{
    console.log('invalid input');
}

