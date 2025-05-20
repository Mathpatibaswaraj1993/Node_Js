const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
        return res.status(400).json({ message: 'Cart is empty' });
    }

    const items = cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price,
    }));

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = await Order.create({ userId, items, totalAmount });
    cart.items = [];
    await cart.save();

    res.status(201).json(order);
};

exports.getUserOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId }).populate('items.productId');
    res.json(orders);
};

exports.getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.orderId).populate('items.productId');
    if (order) res.json(order);
    else res.status(404).json({ message: 'Order not found' });
};

exports.updateOrderStatus = async (req, res) => {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = req.body.status || order.status;
    await order.save();
    res.json(order);
};
