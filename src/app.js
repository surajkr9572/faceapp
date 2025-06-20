const path = require("path");
const express = require("express");

const app = express();

const basePath = path.join(__dirname, "../public");

app.use(express.static(basePath));

//start express server
app.listen(3000, () => {
  console.log("Server Start");
});
