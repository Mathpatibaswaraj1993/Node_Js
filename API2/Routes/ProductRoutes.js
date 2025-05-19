const express = require("express")
const ProductRouter = express.Router()
auth = require("../middlewares/auth")
const { createProduct, getAllProduct, getProductById, deleteProduct, updateProduct, searchByCategory, searchBySubCategory } = require("../controllers/productController")


ProductRouter.post("/", auth, createProduct)
ProductRouter.get("/", getAllProduct)
ProductRouter.put("/", auth, updateProduct)
ProductRouter.delete("/", auth, deleteProduct)
ProductRouter.get("/", auth, getProductById)
ProductRouter.get("/", auth, searchByCategory)
ProductRouter.get("/", auth, searchBySubCategory)



module.exports = ProductRouter