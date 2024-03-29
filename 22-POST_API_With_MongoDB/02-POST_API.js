const express = require('express')
const dbConnect = require('./mongodb')

const app = express()

app.use(express.json())

app.post('/', async (req, resp) => {
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    resp.send(result)
})

app.listen(5000)

