const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'dist' folder inside the 'flippedIT-client' directory
const distPath = path.join(__dirname, "../flippedIT-client/dist");
app.use(express.static(distPath));

// For all other requests, serve the 'index.html' file from the 'dist' folder
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`express server is running on localhost:${port}`);
});
