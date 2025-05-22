require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoute = require('./routes/authRoutes');
const resumeRoute = require('./routes/resumeRoutes');

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: "http://localhost:5172" || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/resume", resumeRoute);

// (Removed uploads folder serving - not needed with Cloudinary)

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


