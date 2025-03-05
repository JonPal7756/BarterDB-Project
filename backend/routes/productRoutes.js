const express = require("express");
const router = express.Router();

// Temporary in-memory data to simulate products
let products = [
  { id: 1, name: "Cool T-Shirt", price: 19.99, description: "A cool shirt" },
  { id: 2, name: "Awesome T-Shirt", price: 24.99, description: "Another design" },
];

// GET /api/products/
// Returns a list of products
router.get("/", (req, res) => {
  res.json(products);
});

// POST /api/products/
// Creates a new product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };
  products.push(newProduct);
  res.json({ message: "Product created", product: newProduct });
});

module.exports = router;
