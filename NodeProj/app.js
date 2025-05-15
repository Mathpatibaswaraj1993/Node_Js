const express = require("express")
const app = express();
const mongoose = require("mongoose")
const { MongoClient } = require('mongodb')

app.set("view engine", "ejs");
app.use(express.static("view"));

// create connection url
const url = "mongodb+srv://mathpatibaswaraj:Apple2025@cluster0.7kw4iux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(url)
async function main() {
    try {
        await client.connect()
        console.log("connection Established");
        const db = client.db('Mern812')
        const collection = db.collection('User')
        console.log("Collection is successfully !!!");

    }
    catch (error) {
        console.log(error);

    }
}

const UserSchema = new mongoose.Schema({
    uname: String,
    age: String,
    role: String,
    email: String
});
const User = mongoose.model("User", UserSchema)


//Home route - show all data
app.get("/", async (req, res) => {
    const items = await User.find();
    res.render("home", { items });
});


app.get("/seed", async (req, res) => {
    await Data.create([
        { title: "Item 1", content: "This is the content of item 1" },
        { title: "Item 2", content: "This is the content of item 2" }
    ]);
    res.redirect("/");
});

//Detail route
app.get("/item/:id", async (req, res) => {
    const item = await User.findById(req.params.id);
    res.render("detail", { item })
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})