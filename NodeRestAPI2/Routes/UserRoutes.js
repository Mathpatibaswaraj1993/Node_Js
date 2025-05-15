const express = require('express')
const app = express()
const User = require('../Models/User')
const router = express.Router()
app.use(express.urlencoded({ extended: true }))


router.post('/addUser', async (req, res) => {
    try {
        await new User(req.body).save()

        res.status(201).json({ msg: "Document Added Successfully!!!" })
    }
    catch (error) {
        res.status(400).send({ err: "Something went Wrong" })
    }
})

//Get All user from users collections

router.get('/', async (req, res) => {
    try {
        const AllUser = await User.find()
        res.status(201).json(AllUser)
    }
    catch (error) {
        res.status(500).json({ err: error.message })
    }
})

module.exports = router



