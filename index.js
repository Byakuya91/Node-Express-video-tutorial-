//imports
const express = require("express");
// creating an app object
const app = express();

// Middleware
app.use(express.json());

// Starting a server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running! On PORT: ${PORT}`);
});
