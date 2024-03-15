const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shop')

const main = async () => {
    
    // to create schema
    const DocSchema = new mongoose.Schema({
        name : String,
        age : Number,
        email : String
    })

    // to create model
    // remember write the 1st letter of collection name in capital  
    const DocModel = mongoose.model('Lecture', DocSchema)

    // data for insert
    let data = new DocModel({ 
        name : 'Tony Stark',
        age: 41, 
        email : 'tony@gmail.com',
        address : {
            country : "USA",
            city : "Washington DC"
        }
    })
    let result = await data.save()
    console.log(result);
}

main()
