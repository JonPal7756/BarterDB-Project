import React, { useEffect, useState } from "react";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch from the backend API running on port 5001
    fetch("http://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>All T-Shirts</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} style={{ margin: "10px 0" }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
}

export default ProductListing;
