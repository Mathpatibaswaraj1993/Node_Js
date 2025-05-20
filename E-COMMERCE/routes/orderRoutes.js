const express = require('express');
const {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
} = require('../controllers/orderController');

const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/:userId', protect, createOrder);
router.get('/:userId', protect, getUserOrders);
router.get('/details/:orderId', protect, getOrderById);
router.put('/:orderId/status', protect, admin, updateOrderStatus);

module.exports = router;
