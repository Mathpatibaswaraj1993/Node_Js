

const express = require('express')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "NOTESAPI"

const userModel = require("../Models/userModel")
const signup = async (req, res) => {

    //Existing user check
    // Hashed password
    // User Creation
    // Token Generate

    const { username, email, password } = req.body

    try {

        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {

            return res.status(400).json({ message: "User alerady exist" })

        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const result = await userModel.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY)
        res.status(201).json({ user: result, token: token })

    }
    catch (error) {

        console.log(error)
        res.status(500).json({ err: error.message })
    }
}

const signin = async (req, res) => {

    const { email, password } = req.body

    try {

        const existingUser = await userModel.findOne({ email: email })
        if (!existingUser) {

            return res.status(404).json({ message: "User not found" })

        }
        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentilas" })

        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY)
        res.status(201).json({ user: existingUser, token: token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }

}
module.exports = { signup, signin }