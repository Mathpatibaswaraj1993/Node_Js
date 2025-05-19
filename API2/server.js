const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productroute = require('./Routes/ProductRoutes')
require('./config.js')
// app.get("", (req, res) => {
//     res.send("Welcome to Home Page")
// })
// app.get("/about", (req, res) => {
//     res.send("Welcome to About Page")
// })
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', productroute)
// mongoose.connect('mongodb+srv://mathpatibaswaraj:Apple2025@cluster0.7kw4iux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
//     console.log("Connected....!!");

// })


app.listen(3000, () => {
    console.log("server starting on 3000");

})
