const express = require('express')
const app = express()
const router = express.Router()


const reqFilter = (req, res, next) => {

    let age = req.query.age
    if (!age) {
        res.send("<h3 style='color:red'>Please Provide your Age.....</h3>")
    }

    else if (age < 18) {
        res.send("<h3 style='color:red'>Sorry   you are under  Age.....</h3>")
    }
    else {
        next()
    }
}
// app.use(reqFilter)
router.use(reqFilter)
app.get("", (req, res) => {
    res.send("First Request")

})

app.get("/second", (req, res) => {
    res.send("second Request")

})

app.get("/third", (req, res) => {
    res.send("Third Request")
    let n1 = req.query.a
    let n2 = req.query.b
    console.log(`${n1} and ${n2}`);
})

router.get("/about", (req, res) => {
    res.send("About Page")
})
app.use("/", router)


app.listen(3000, () => {
    console.log("server start....!!!");
})