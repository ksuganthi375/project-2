import express from 'express';
import { fetchCart } from '../controllers/cartController.js';
const router = express.Router();

router.get('/fetch-cart', fetchCart);

export default router;

