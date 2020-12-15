"use strict";
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});
app.listen(port, () => {
  console.log(`Server running at: http://127.0.0.1:${port}`);
});
