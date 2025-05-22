require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoute = require('./routes/authRoutes');
const resumeRoute = require('./routes/resumeRoutes');

const app = express();

// Allow both deployed frontend and localhost for development
const allowedOrigins = [
  'https://resume-x-frontend.vercel.app',
  'http://localhost:5173'
];

app.use(cors({ origin: true, credentials: true }));


// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/resume", resumeRoute);

// (Removed uploads folder serving - not needed with Cloudinary)

// Start Server (for local dev)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}

module.exports = app;