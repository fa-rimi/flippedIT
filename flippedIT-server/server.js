// Import necessary modules and configure environment
const express = require("express");
const path = require("path");
require("dotenv").config(); // Load environment variables
require("./config/database"); // Connect to the database
const Leaderboard = require("./models/leaderboard"); // Import Leaderboard model

// Create an instance of the Express.js application
const app = express();
const port = process.env.PORT || 3001; // Define the port for the server

// Middleware: Parse JSON data from incoming requests
app.use(express.json());

// Error handling middleware - Handle server errors globally
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Define a path to the 'dist' folder inside the 'flippedIT-client' directory
const distPath = path.join(__dirname, "../flippedIT-client/dist");

// Serve static files (images, stylesheets, scripts) from the 'dist' folder
app.use(express.static(distPath));

// For all other requests that do not have a distinct route, serve the 'index.html' file
app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

/**-------------------
 * Leaderboard Routes |
 * -------------------
 */

// Route to get the leaderboard data
app.get("/leaderboard", async (req, res) => {
  try {
    // Fetch leaderboard data from the database, sorted by score in descending order
    const leaderboardData = await Leaderboard.find()
      .sort({ score: -1 })
      .limit(10);

    // Send the leaderboard data as JSON response
    res.json(leaderboardData);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to create a new leaderboard entry
app.post("/leaderboard", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, score } = req.body;

    // Create a new leaderboard entry
    const newEntry = new Leaderboard({
      name,
      score,
    });

    // Save the new entry to the database
    await newEntry.save();

    // Send a success response
    res.status(201).json({ message: "Leaderboard entry created successfully" });
  } catch (error) {
    console.error("Error creating leaderboard entry:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * Server Configuration - Start the server
 */
app.listen(port, () => {
  console.log(`Express server is running on localhost:${port}`);
});
