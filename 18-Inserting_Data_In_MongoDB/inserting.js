const dbConnect = require('./mongodb')

const inserting = async () => {
    const db = await dbConnect()
    const result = await db.insertMany([
        {name : 'Note 6', brand : 'Vivo', price : 400, category : 'mobile'},
        {name : 'Note 7', brand : 'Vivo', price : 500, category : 'mobile'},
        {name : 'Note 8', brand : 'Vivo', price : 600, category : 'mobile'},
        {name : 'Note 9', brand : 'Vivo', price : 700, category : 'mobile'},
    ])
    if (result.acknowledged) {
        console.log('Data Inserted :)');
    }
}

inserting()

