const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pname: { type: String },
    qty: { type: Number },
    price: { type: Number }
})

module.exports = mongoose.model("Product", productSchema)