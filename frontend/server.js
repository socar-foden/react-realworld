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


// TODO: 공유기 포트 8080도 열어주기
app.listen(process.env.PORT || 80, () => {
  console.log(`✅ Server is running on [ PORT: ${process.env.PORT} ]`);
});
