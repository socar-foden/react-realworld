const path = require("path");
const express = require("express");
const fallback = require("express-history-api-fallback");
require("dotenv").config({
  path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`),
});

const app = express();
const root = path.join(__dirname, `/dist/${process.env.NODE_ENV}`);
const PORT = process.env.NODE_ENV === "production" ? 80 : 8080;

app.use(express.static(root));
app.use(fallback("index.html", { root: root }));

app.get("/", (req, res) => {
  console.log(__dirname);

  res.sendFile(
    path.join(__dirname, `./dist/${process.env.NODE_ENV}/index.html`)
  );
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on [ PORT: ${PORT} ]`);
});
