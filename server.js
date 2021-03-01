const path = require("path");
const express = require("express");
const fallback = require("express-history-api-fallback");
require("dotenv").config({
  path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`),
});

const app = express();
const root = path.join(__dirname, "/dist");

app.use(express.static(root));
app.use(fallback("index.html", { root: root }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(
    `✅ Server is running on [ http://localhost:${process.env.PORT} ]`
  );
});
