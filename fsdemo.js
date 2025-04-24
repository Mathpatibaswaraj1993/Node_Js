const fs = require('fs')


console.log("Program started...!!!")

//Non-Blocking code
fs.readFile("newFile.txt",'utf8',(err,data)=>{
    if(err) return console.log(err)
        console.log(data)
})

//blocking code(Asynchronus)
 const app =fs.readFileSync('app.js')
console.log(app.toString())



console.log("Program running...!!!")

fs.readFile("demo.js",'utf8',(err,data)=>{
  if(err) return console.log(err)
    console.log(data)

})

console.log("Program Ended...!!!")
