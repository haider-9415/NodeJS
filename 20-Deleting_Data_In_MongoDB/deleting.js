const dbConnect = require('./mongodb')

const deleting = async () => {
    const db = await dbConnect()
    const result = await db.deleteOne({
        name : 'Note 5'
    })
    if (result.acknowledged && result.deletedCount>0) {
        console.log('Data Deleted :)');
    }
}

deleting()

