const http = require('http');
const path =require('path')
const fs =require('fs')
const filepath = path.join(__dirname,"Files")

const s = http.createServer((req,res)=>{

    // fs.readFile(${filepath}/Files/file.html,(err,data)=>{
    //     if(err) return console.log(err)
    // })
  fs.readFile(`${filepath}/file.html`,'utf8',(err,data)=>{
      if(err) return console.log(err)
          console.log(data)
        res.write(data)
        res.end()
  })
})
s.listen(3000,()=>{
    console.log("Server is running on port 3000")
})