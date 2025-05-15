const express = require('express')
const app = express()


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mathpatibaswaraj:Apple2025@cluster0.7kw4iux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("Connected....!!");
    
})


app.listen(3000, ()=>{
    console.log("server starting on 3000");
    
})
