const express = require('express')
const connection = require('./config')
const app = express()

app.get('/', (req, resp) => {
    connection.query('select * from table_a', (err, result) => {
        if (err) {
            resp.send('there is an error');
        } else {
            resp.send(result);
        }
    })
})

app.listen(5000)
