const express = require("express");
const router = express.Router();

// In-memory data for example (replace with real DB later)
let users = [
  { id: 1, email: "user1@example.com", password: "pass123" },
  { id: 2, email: "user2@example.com", password: "pass456" },
];

// POST /api/users/register
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  // Simple check: does user exist?
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
  };
  users.push(newUser);
  res.json({ message: "User registered", user: newUser });
});

// POST /api/users/login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
});

module.exports = router;
