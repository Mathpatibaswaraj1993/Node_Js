const fs = require('fs')
const path = require('path')
const http = require('http')


const filepath = path.join(__dirname,)

console.log(filepath)


// fs.writeFileSync(`fruits.html`,`This is html files`)
// console.log("File has successfully ")

// fs.writeFileSync(`fruits.txt`,`This is Text files`)
// console.log("File has successfully ")


// fs.appendFileSync('fruits.txt',' \n mango')
// fs.appendFileSync('fruits.txt',' \n Banana')
// fs.appendFileSync('fruits.txt',' \n Apple')
// fs.appendFileSync('fruits.txt',' \n Orange')
// fs.appendFileSync('fruits.txt',' \n Melon')
// fs.appendFileSync('fruits.txt',' \n Lemon')


for(let i=1; i<=5;i++){
    fs.writeFileSync(`${filepath}/f${i}.txt`,`This is file number ${i}`)

}
console.log("Files created successfully")
