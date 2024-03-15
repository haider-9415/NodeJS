const express = require('express')
const dbConnect = require('./mongodb')
const MongoDB = require('mongodb')

const app = express()
app.use(express.json())

app.delete('/:id', async (req, resp) => {
    const data = await dbConnect()
    const result = await data.deleteOne({_id : new MongoDB.ObjectId(req.params.id) })
    resp.send(result)
})

app.listen(5000)
