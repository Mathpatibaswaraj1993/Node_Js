const express = require('express');
const {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    emptyCart,
} = require('../controllers/cartController');

const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/:userId')
    .get(protect, getCart)
    .post(protect, addToCart)
    .put(protect, updateCartItem)
    .delete(protect, emptyCart);

router.delete('/:userId/:productId', protect, removeCartItem);

module.exports = router;
