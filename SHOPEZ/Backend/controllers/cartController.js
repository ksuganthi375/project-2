import mongoose from "mongoose";
import Cart from "../models/cart.js";

// GET /api/cart/fetch-cart?userId=123
export const fetchCart = async (req, res) => {
  try {
    const userId = req.query.userId;

    // If no userId → return empty cart
    if (!userId) {
      return res.json({ success: true, cart: [] });
    }

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.json({ success: true, cart: [] });
    }

    const cartDoc = await Cart.findOne({ userId });

    return res.json({
      success: true,
      cart: cartDoc ? cartDoc.items : []
    });

  } catch (err) {
    console.error("Fetch cart error:", err.message);
    return res.json({ success: true, cart: [] });
  }
};
