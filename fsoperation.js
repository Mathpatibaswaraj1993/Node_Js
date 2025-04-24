const fs = require('fs')
const path = require('path')


const filepath = path.join(__dirname,'Files')
console.log(filepath)

fs.readFile(`${filepath}/f2.txt`,'utf8',(err,data)=>{
    if(err) return console.log(err)
        console.log(data)
})

// -current working directory path
console.log(__dirname)

fs.writeFileSync('f1.txt','Javascript is a programming language')
console.log("File created successfully")

// fs.appendFileSync('f1.txt',' \n Javascript is a scripting language')
// console.log("File updated successfully")


for (let i=1;i<=5;i++){
     fs.writeFileSync(`${filepath}/file${i}.txt`,`This is file number ${i}`)
}
console.log("Files created successfully")



// fs.unlinkSync(`${filepath}/f1.txt`)


// for (let i=1;i<=5;i++){
//    fs.unlinkSync(`${filepath}/file${i}.txt`,`This is file number ${i}`)
// }
// console.log("Files deleted successfully")