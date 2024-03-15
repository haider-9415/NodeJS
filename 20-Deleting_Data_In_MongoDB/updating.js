const dbConnect = require('./mongodb')

const updating = async () => {
    const db = await dbConnect()
    const result = await db.updateOne(
        {name : 'Note max 5'}, {
            $set : {name : 'Note pro 5'}
        }
    )
    if (result.acknowledged && result.modifiedCount>0) {
        console.log('Data Updated :)');
    }
}

updating()


