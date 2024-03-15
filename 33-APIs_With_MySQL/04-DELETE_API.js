const express = require('express')
const connection = require('./config')
const app = express()
app.use(express.json())

app.delete('/:lname', (req, resp) => {
    connection.query(`DELETE FROM table_a WHERE lname='${req.params.lname}'`, (err, result, fields) => {
        if (err) {
            throw err
        } else {
            resp.send(result);
        }
    })
})

app.listen(5000)

