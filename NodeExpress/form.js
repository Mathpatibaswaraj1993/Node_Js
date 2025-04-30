const { log } = require("console")
const express = require("express")
const app = express()
const path = require("path")

const filepath = path.join(__dirname, "/public") //path of public folder
// const filepath = __dirname + "/public" //path of public folder



// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({ extended: true })) // to parse urlencoded data MIDDLEWARE IS USED
  
            //OR//

app.use(express.urlencoded({extended:false}))
console.log(__dirname);


app.get("/form", (req, res) => {
    res.sendFile(`${filepath}/form.html`)
})

app.post("/submit-form", (req, res) => {
    console.log("This is post request")
    console.log(req.body) // to get the data from the request body
    // res.send("Hello from the express server")
   
    res.send("Form Data  received Successfully !!!")
})
 

app.get("/calculator",(req,res)=>{
    res.sendFile(`${filepath}/calculator.html`)

})

app.post("/submit-calculator",(req,res)=>{

    let a = (parseInt( req.body.fno))
    let b = (parseInt (req.body.sno))
    let button = req.body.btn
    console.log(button);
    
    let c 

    if(button == "Add")
    {
        c= a+b
    }
    if(button == "Sub")
    {
        c= a-b
    }
    if(button == "Mul")
    {
        c= a*b
    }
    if(button == "Div")
    {
        c= a/b
    }
      

    console.log(`${button} :- ${c.toFixed(2)}`)

    res.send("Data Received Successfully !! ")
})

app.get("",(req,res)=>{
    res.sendFile(`${filepath}/home.html`)

})




app.listen(3000,()=>{
    console.log("This is server running on port no 3000")
})