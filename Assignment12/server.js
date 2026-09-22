require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.json({
    message: "Assignment 12: Authentication API is up and running!"
  });
});

// Mount authentication routes
app.use(authRoutes);

// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB Atlas
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Endpoints available:`);
      console.log(` - POST http://localhost:${PORT}/register`);
      console.log(` - POST http://localhost:${PORT}/login`);
      console.log(` - GET  http://localhost:${PORT}/profile (Protected)`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
