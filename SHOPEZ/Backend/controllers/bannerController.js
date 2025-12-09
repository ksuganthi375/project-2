// Backend/controllers/bannerController.js
// Simple controller to return banner(s)

import Banner from "../models/banner.js"; // optional - if present

export const getAllBanners = async (req, res) => {
  try {
    // Prefer to read from DB if model exists
    if (Banner) {
      const items = await Banner.find().limit(5); // adjust to your schema
      return res.json({ success: true, banners: items });
    }
  } catch (err) {
    console.warn("Banner model read failed or Banner model missing:", err.message || err);
  }

  // Fallback sample response so frontend can parse JSON
  return res.json({
    success: true,
    banners: [
      { id: 1, image: "/images/sample-banner-1.jpg", title: "Sale" },
      { id: 2, image: "/images/sample-banner-2.jpg", title: "New Arrivals" }
    ]
  });
};

