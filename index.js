const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

// API route
app.get("/api", (req, res) => {
  res.json({
    message: "API is working",
    status: "success"
  });
});

// POST route
app.post("/user", (req, res) => {
  const data = req.body;

  res.json({
    message: "User received",
    user: data
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});