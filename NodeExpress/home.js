const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

const filepath = path.join(__dirname, "/public") //path of public folder

app.use(bodyParser.urlencoded({ extended: true })) // to parse urlencoded data MIDDLEWARE IS USED
app.use(express.json()); 

app.get("/signup", (req, res) => {
    res.sendFile(`${filepath}/signup.html`)
    console.log("This is get request")
    console.log(req.body) // to get the data from the request body
})

app.post("/submit-signup", (req, res) => {
    console.log("This is post request")
    console.log(req.body) // to get the data from the request body
    // res.send("Hello from the express server")
    res.send('Form submitted!');
    // res.send("Form Data  received Successfully !!!")
})

app.get("/login", (req, res) => {
    res.sendFile(`${filepath}/login.html`)
})

app.post("/submit-login", (req, res) => {
    console.log("This is post request")
    console.log(req.body) // to get the data from the request body
    // res.send("Hello from the express server")
    res.send('login successfully Done !!!!');

})

app.get("", (req, res) => {
    res.sendFile(`${filepath}/Home1.html`)
})
    app.listen(3000,()=>{
        console.log("This is server running on port no 3000")
})