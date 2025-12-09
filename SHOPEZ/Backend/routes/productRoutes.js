import express from 'express';
import { fetchProducts, fetchCategories } from '../controllers/productController.js';
const router = express.Router();

router.get('/', fetchProducts);
router.get('/fetch-categories', fetchCategories);

export default router;


