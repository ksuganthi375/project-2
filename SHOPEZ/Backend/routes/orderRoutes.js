import express from 'express';
import { createOrder, fetchOrders } from '../controllers/orderController.js';
const router = express.Router();

router.post('/create', createOrder);
router.get('/list', fetchOrders);

export default router;
