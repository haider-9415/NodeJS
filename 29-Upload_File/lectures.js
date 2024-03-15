const mongoose = require('mongoose')

const DocSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String
})

module.exports = mongoose.model('Lecture', DocSchema)
