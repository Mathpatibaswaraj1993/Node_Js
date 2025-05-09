const { MongoClient } = require('mongodb')

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// create connection url
const url = "mongodb+srv://mathpatibaswaraj:Apple2025@cluster0.7kw4iux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url)
var collection
async function main() {
    try {
        await client.connect()
        console.log("connection Established");
        const db = client.db('Mern812')
        const collection = db.collection('User')
        console.log("Collection is successfully !!!");
        insert(collection);
        // updateDocument(collection)
        // showAllDocuments(collection)
    }
    catch (error) {
        console.log(error);

    }
}


async function insert(collection) {
    const insertDocument = await collection.insertOne('User')(req.body)
    console.log("Document Inserted :-", insertDocument)
}
// async function insert(collection) {
//     const insertDocument = await collection.insertOne({ uname: 'DEF', age: 30, role: 'Developer', email: 'def@gmail.com' })
//     console.log("Document Inserted :-", insertDocument)
// }

// async function showAllDocuments(collection) {
//     const alldocuments = await collection.find({}).toArray()
//     console.log(alldocuments);
// }

// async function updateDocument(collection) {
//     const updateDocument = await collection.updateOne({ uname: 'DEF' }, { $set: { age: 23, role: 'Testing' } })
//     console.log(updateDocument);
// }



main()



app.get("", (req, res) => {
    res.render("data")
    insert(collection)

})
app.post("/submit", (req, res) => {
    res.render("data", { 'msg': "Data Added Successfully !!!" })

})

app.listen(3000)
