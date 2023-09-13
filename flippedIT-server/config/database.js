const mongoose = require("mongoose");

// Check if the DATABASE_URL environment variable is defined
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined in the environment.");
  process.exit(1); // Exit the application with an error code
}

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
