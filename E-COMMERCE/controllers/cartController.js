const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    res.json(cart || { userId: req.params.userId, items: [] });
};

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
        cart = await Cart.create({
            userId: req.params.userId,
            items: [{ productId, quantity }],
        });
    } else {
        const item = cart.items.find(item => item.productId.toString() === productId);
        if (item) {
            item.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }
        await cart.save();
    }

    res.status(200).json(cart);
};

exports.updateCartItem = async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.params.userId });

    if (cart) {
        const item = cart.items.find(item => item.productId.toString() === productId);
        if (item) {
            item.quantity = quantity;
            await cart.save();
            return res.json(cart);
        }
    }

    res.status(404).json({ message: 'Cart or item not found' });
};

exports.removeCartItem = async (req, res) => {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({ userId });

    if (cart) {
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        return res.json(cart);
    }

    res.status(404).json({ message: 'Cart not found' });
};

exports.emptyCart = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
        cart.items = [];
        await cart.save();
        return res.json(cart);
    }
    res.status(404).json({ message: 'Cart not found' });
};
