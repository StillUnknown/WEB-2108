import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
const connectToDatabase = async (uri, callback) => {
    try {
        const db_URL=process.env.DATABASE_URL
        await mongoose.connect(db_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Successfully connected to database')
    } catch (error) {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE:', error)
        process.exit()
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}

export default {
    connectToDatabase,
    connectToPort
}