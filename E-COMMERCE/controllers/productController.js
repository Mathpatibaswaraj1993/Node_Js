const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    const products = await Product.find().populate('category', 'name');
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (product) res.json(product);
    else res.status(404).json({ message: 'Product not found' });
};

exports.createProduct = async (req, res) => {
    const { name, price, description, stock, category } = req.body;
    const product = new Product({ name, price, description, stock, category });
    await product.save();
    res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
    const { name, price, description, stock, category } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.stock = stock ?? product.stock;
    product.category = category || product.category;

    await product.save();
    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    await product.remove();
    res.json({ message: 'Product deleted' });
};
