const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered'], default: 'pending' },
    items: [orderItemSchema],
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
