const express = require('express');
const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController');

const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
    .get(getAllCategories)
    .post(protect, admin, createCategory);

router.route('/:id')
    .put(protect, admin, updateCategory)
    .delete(protect, admin, deleteCategory);

module.exports = router;
