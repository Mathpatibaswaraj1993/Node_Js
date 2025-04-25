const express = require('express');
const app = express();

//Handle get request using express js 
app.get("",(req,res)=>{          //base path "/"
    res.send("Hello from the express server")
    
})
app.get("/about",(req,res)=>{          //base path "/"
    res.send("This is the about page")
    
})
app.get("/profile",(req,res)=>{          //base path "/"
    res.send("This is the profile page")
    
})
app.get("/html",(req,res)=>{          //base path "/"
    res.send("This is the html page")
    
})
app.get("/show",(req,res)=>{          //base path "/"
    res.send("This is the show page")
    
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})


// nodemon -dependency -- module --server rerun 
