// Backend/controllers/productController.js
import Product from "../models/product.js";

// ------------------ FETCH PRODUCTS ------------------
export const fetchProducts = async (req, res) => {
  try {
    if (Product) {
      const products = await Product.find();
      return res.json({ success: true, products });
    }
  } catch (err) {
    console.warn("Product model read failed:", err.message || err);
  }

  // Fallback products if DB model missing
  return res.json({
    success: true,
    products: [
      { name: "Sample Product 1", price: 999 },
      { name: "Sample Product 2", price: 1499 }
    ]
  });
};

// ------------------ FETCH CATEGORIES ------------------
export const fetchCategories = async (req, res) => {
  try {
    if (Product) {
      const cats = await Product.distinct("category");
      return res.json({ success: true, categories: cats });
    }
  } catch (err) {
    console.warn("Category read failed:", err.message || err);
  }

  // Fallback categories
  const fallbackCategories = ["Clothing", "Electronics", "Home", "Beauty"];
  return res.json({ success: true, categories: fallbackCategories });
};

