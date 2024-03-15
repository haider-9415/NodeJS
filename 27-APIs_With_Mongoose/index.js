const express = require('express')
require('./config')

const lectures_coll = require('./lectures')
const app = express()

app.use(express.json())


/* POST API */
app.post("/create", async (req, resp) => {
    let data = new lectures_coll(req.body)
    let result = await data.save()
    console.log(req.body);
    resp.send(result)
})


/* GET API */
app.get("/list", async (req, resp) => {
    let data = await lectures_coll.find()
    resp.send(data)
})


/* DELETE API */
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await lectures_coll.deleteOne(req.params)
    resp.send(data)
})


/* PUT API */
app.put("/update", async (req, resp) => {
    console.log(req.params);
    let data = await lectures_coll.updateOne(
        {name : req.body.name},
        {
            $set : req.body
        }
    )
    resp.send(data)
})

app.listen(5000)
