const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get("", (req, res) => {
    res.render("Data",{'msg':""})
})
app.post("/submit", (req, res) => {
    res.render("Data", { 'msg': "Data Added Successfully !!!" })
    
})



