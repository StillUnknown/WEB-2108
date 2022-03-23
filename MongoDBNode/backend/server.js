import {MongoClient} from "mongodb"

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const dbName = "actors"
const collectionName = "roles"
let collection = null

async function connect() {
    await client.connect() // kopplar till servern
    let database = client.db(dbName) // hämta databas
    collection = database.collection(collectionName) // hämta collection
}

async function insertOne(jsonDocument) { // Create

    await connect()

    try { // lagra dokument i databasen
        const exists = await collection.findOne(jsonDocument)
        if (exists == null) {
            const result = await collection.insertOne(jsonDocument)
            console.log(`Document was created with Id ${result.insertedId}`)
            return result
        }
    } catch (error) {
        console.log(`Error: ${error}`)
    } finally { // koppla ner från databasen
        await client.close()
    }
} // Create

async function findOne(jsonDocument) { // Read (find)

    await connect()

    try { // lagra dokument i databasen
        const result = await collection.findOne(jsonDocument)
        console.log(result)
        return result

    } catch (error) {
        console.log(`Error: ${error}`)
    } finally { // koppla ner från databasen
        await client.close()
    }
} // Read (find)

async function deleteOne(jsonDocument) { // Delete

    await connect()

    try { // lagra dokument i databasen
        await collection.deleteOne(jsonDocument)
        console.log("Document was deleted")
    }
    catch
        (error) {
        console.log(`Error: ${error}`)
    }
    finally { // koppla ner från databasen
        await client.close()
    }
} // Delete

async function updateOne(filter, update) { // Update
    await connect()

    try {
        await collection.updateOne(filter, update)
        console.log("Updated document")
    }
    catch(error) {
        console.log(`Ooops: ${error}`)
    }
    finally {
        await client.close()
    }
} // Update

async function getAll(filter= null, sort= {name:1}) { // Get all data
    await connect()

    try {
        const result = await collection.find(filter).sort(sort).toArray() // Data sort in array
        console.log(result)
        return result
    }
    catch(error) {
        console.log(`Error: ${error}`)
    }
    finally {
        await client.close()
    }
} // Get all data

await insertOne({name: "Adam West", role: "Batman"})
await insertOne({name: "Michael Keaton", role: "Batman"})
await insertOne({name: "Michael Keaton", role: "Beetlejuice"})
await insertOne({name: "Ben Affleck", role: "Batman"})
await insertOne({name: "Ryan Reynolds", role: "Deadpool"})

await findOne({name: "Ben Affleck"})
await findOne({role: "Beetlejuice"})
await findOne({name: {$regex: "Ben"}})

await deleteOne({role: "Beetlejuice"})
await findOne({role: "Beetlejuice"})

await updateOne({name: "Adam West"}, {$set:{role: "Classic Batman"}})
await findOne({name: "Adam West"})
console.log('-----------------------------------------')
await getAll({role: "Batman"}, {name:-1})