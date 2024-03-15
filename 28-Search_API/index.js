const express = require('express')
require('./config')
const lectures_coll = require('./lectures')
const app = express()

app.use(express.json())

app.delete('/search/:key', async (req, resp) => {
    console.log('\nreq.params.key --> ',req.params.key, '\n');
    let data = await lectures_coll.find(
        {
            $or : [
                { name : {$regex : req.params.key } },
                { email : {$regex : req.params.key } }
            ]
        }
    )
    resp.send(data)
    console.log('Data:\n', data);
})

app.listen(5000)
