const mysql = require("mysql")

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'PagalgadhA',
    database : 'my_database'
})

connection.connect((err) => {
    if (err) {
        console.warn(err);
    } else {
        console.warn('connected');
    }
})