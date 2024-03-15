const express = require('express')
const connection = require('./config')
const app = express()
app.use(express.json())

app.put('/:fname', (req, resp) => {
    const data = [req.body.fname, req.body.lname, req.body.dob,    req.params.fname]
    connection.query('UPDATE table_a SET fname = ?, lname = ?,     dob = ? where fname = ?', data, (err, result, fields) => {
        if (err) {
            resp.send('there is an error');
        } else {
            resp.send(result);
        }
    })
})

app.listen(5000)

