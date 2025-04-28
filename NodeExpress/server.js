const express =require("express")
const app = express()
const path = require("path")
const filepath = path.join(__dirname,"/public") //path of public folder


app.use(express.json()) // to parse json data MIDDLEWARE IS USED TO PARSE JSON DATA IN REQUEST BODY
// app.use(express.urlencoded({extended:false})) // to parse urlencoded data MIDDLEWARE IS USED

app.get("",(req,res)=>{          
    res.sendFile(`${filepath}/home.html`)
    
})
app.get("/about",(req,res)=>{         
    res.sendFile(`${filepath}/about.html`)
    
})
app.get("/profile",(req,res)=>{         
    res.sendFile(`${filepath}/profile.html`)
    
})
app.get("/help",(req,res)=>{         
    res.sendFile(`${filepath}/help.html`)
    
})
app.get("/form",(req,res)=>{   
    console.log(" This is Get request")
       // res.send("Hello from the express server")      
    res.sendFile(`${filepath}/form.html`)
    
})
app.post("/form",(req,res)=>{         
    console.log(" This is post request")
    // console.log(req.body) // to get the data from the request body
    

    res.send("Hello from the express server")
    
})


app.listen(3000,()=>{
    console.log("This is server running on port no 3000")
})
