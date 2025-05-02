const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))

let user = {
    name: "john",
    age: 23,
    country: "US",
    role: "Admin"
}

let person = {
    name: "bob",
    country:"London",
    age: 34,
    state: "UK",
    role: "Manager",
    city: "Auckland"
    
}



var c

app.get("", (req, res) => {
    res.render("Pages/index",{user})
})
app.get("/person", (req, res) => {
    res.render("Pages/person",{person})
})

app.get("/form", (req, res) => {
    res.render("Pages/form",{c})
})


app.post("/form", (req, res) => {
    let a = parseInt(req.body.fno)
    let b = parseInt(req.body.sno)
    // console.log(req.body)
    c = a + b
    
    res.render("pages/form",{c})

})


app.get("/home", (req, res) => {
    res.sendFile(`${__dirname}/home.html`)
})




app.listen(3000)