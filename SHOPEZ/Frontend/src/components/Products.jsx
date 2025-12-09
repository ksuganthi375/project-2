import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await axios.get("http://localhost:6001/api/products")


        // Always store an array
        const list =
          res?.data?.products && Array.isArray(res.data.products)
            ? res.data.products
            : [];

        setProducts(list);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;

  if (error)
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        Failed to load products
      </h2>
    );

  if (!products.length)
    return (
      <h2 style={{ textAlign: "center" }}>
        No products available.
      </h2>
    );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "15px" }}>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <img
              src={p.image || "/images/no-image.png"}
              alt={p.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3 style={{ marginTop: "10px" }}>{p.name}</h3>

            <p style={{ color: "gray", fontSize: "14px" }}>
              {p.category}
            </p>

            <h3 style={{ marginTop: "5px" }}>₹{p.price}</h3>

            <button
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "100%",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
