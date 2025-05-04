const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
