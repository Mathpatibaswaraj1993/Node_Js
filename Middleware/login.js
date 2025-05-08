const express = require('express')
const app = express()
const router = express.Router()


app.use(express.urlencoded({ extended: true }))

//custom created middleware
const reqFilter = (req, res, next) => {
    const u = req.body.uname
    const p = req.body.pass

    if (u != "admin") {
        res.status(404).json({ 'error': 'Invalid username' })
    }
    else if (u == "admin" && p !== 'admin@123') {
        res.status(404).json({ 'error': 'Invalid password' })
    }
    else {
        next()
    }
}


app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/form.html`)
})

app.post("/Process", reqFilter, (req, res) => {
    res.status(200).json({ 'msg': 'Login Successfully' })
})
app.listen(3000, () => {
    {
        console.log("server starting.....");

    }
})

