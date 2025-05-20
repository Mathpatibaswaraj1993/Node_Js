const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    const exists = await Category.findOne({ name });

    if (exists) return res.status(400).json({ message: 'Category already exists' });

    const category = await Category.create({ name });
    res.status(201).json(category);
};

exports.updateCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    category.name = req.body.name || category.name;
    await category.save();
    res.json(category);
};

exports.deleteCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    await category.remove();
    res.json({ message: 'Category deleted' });
};
