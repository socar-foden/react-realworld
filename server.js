const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`) });

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on [ http://localhost:${process.env.PORT} ]`);
});
