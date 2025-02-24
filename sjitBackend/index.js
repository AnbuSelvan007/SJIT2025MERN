const express = require("express");
const app = express();
const path=require('path')
// Define Port
const PORT = process.env.PORT || 5000;

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

// Sample API Route
app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname,"..","index.html"));
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
