const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shop')

// to create schema
const DocSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String
})


/* creating document */
const saveInDB = async () => {
    // to create model
    // remember write the 1st letter of collection name in capital  
    const DocModel = mongoose.model('Lecture', DocSchema)

    // data for insert
    let data = new DocModel({ 
        name : 'Bruce Wayne',
        age: 51, 
        email : 'bruce@gmail.com',
    })
    let result = await data.save()
    console.log(result);
}

// saveInDB()


/* updating document */
const updateInDB = async () => {

    // to create model
    const DocModel = mongoose.model('Lecture', DocSchema)

    // for update
    let data = await DocModel.updateOne(
        {name : 'Steve Rogers'},
        {
            $set : { age : 50 }
        }
    )
    console.log(data);
}

// updateInDB()



/* deleting document */
const deleteInDB = async () => {

    // to create model
    const DocModel = mongoose.model('Lecture', DocSchema)

    // for update
    let data = await DocModel.deleteOne(
        {name : 'Steve Rogers'}
    )
    console.log(data);
}

// deleteInDB()



/* finding document */
const findingInDB = async () => {

    // to create model
    const DocModel = mongoose.model('Lecture', DocSchema)

    // for update
    let data = await DocModel.find()
    console.log('Data from DB:\n',data);
}

findingInDB()
