const http = require('http')
const s = http.createServer((req,res)=>{

res.write("Hello World !!!!!")
res.end()
})
s.listen(8000,()=>{
    console.log("Server is listen on port no 8000")
})