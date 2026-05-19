const express = require("express");

const app = express();

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
// GET endpoint
app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ajay"
    },
    {
      id: 2,
      name: "John"
    },
    {
      id: 3,
      name: "Sai"
    }

  ]);
});
// POST route
app.post("/admin", (req, res) => {
  const data = req.body;

  res.json({
    message: "Admin received",
    user: data
  });
});
// GET endpoint
app.get("/admins", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ajay"
    },
    {
      id: 2,
      name: "Sai"
    }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT }`);
});