const express = require('express')
const connection = require('./config')
const app = express()
app.use(express.json())
app.post('/', (req, resp) => {
    const data = req.body
    connection.query('INSERT INTO table_a SET ?', data, (err, result, fields) => {
        if (err) {
            resp.send('there is an error');
        } else {
            resp.send(result);
        }
    })
})

app.listen(5000)
