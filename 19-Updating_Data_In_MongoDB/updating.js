const dbConnect = require('./mongodb')

const updating = async () => {
    const db = await dbConnect()
    const result = await db.updateOne(
        {name : 'Note 8'}, {
            $set : {name : 'Note max 8'}
        }
    )
    if (result.acknowledged) {
        console.log('Data Updated :)');
    }
}

updating()

