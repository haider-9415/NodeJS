const express = require('express')
const dbConnect = require('./mongodb')

const app = express()
app.use(express.json())

app.put('/', async (req, resp) => {
    let data = await dbConnect()
    let result = await data.updateOne(
        { name : 'Tony Stark'},
        {$set : req.body }
    )
    resp.send({result : 'updated'})
})

app.listen(5000)
