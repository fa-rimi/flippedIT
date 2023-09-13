// Import the Express.js framework and path module
const express = require("express");
const path = require("path");
require("dotenv").config();
require("./config/database");

// Create an instance of the Express.js application
const app = express();
const port = process.env.PORT || 3001;

// Middleware: Parse JSON data from incoming requests
app.use(express.json());

// Define a path to the 'dist' folder inside the 'flippedIT-client' directory
const distPath = path.join(__dirname, "../flippedIT-client/dist");

// Serve static files (like images, stylesheets, and scripts) from the 'dist' folder
app.use(express.static(distPath));

// For all other requests that do not have a distinct route, serve the 'index.html' file
app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

/**
 * Server Configuration
 */
app.listen(port, () => {
  console.log(`express server is running on localhost:${port}`);
});
