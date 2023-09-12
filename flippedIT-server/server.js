const express = require("express");
const app = express();
const port = process.env.PORT || 3001; // Define the port for your server

// Middleware: This example serves static files from a "public" directory.
app.use(express.static("public"));

// ** Routes **

/**
 * Sample Route
 */
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
  console.log("And we are live!");
});

/**
 * Server
 */
app.listen(port, () => {
  console.log(`Express server is running on localhost:${port}`);
});
