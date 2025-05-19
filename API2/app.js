const express = require("express")
const app = express()
var cors = require('cors')
require("./config")
const userRouter = require("./Routes/userRoutes")
const noteRouter = require("./Routes/noteRoutes")
const ProductRouter= require("./Routes/ProductRoutes")
app.use(express.json());
app.use(cors())
app.use("/users", userRouter)
app.use("/note", noteRouter)
app.use("/product",ProductRouter)

app.listen(5000, () => {
    console.log("Server is running on prot number 5000")
})