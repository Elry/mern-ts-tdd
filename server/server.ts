const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controller/user.controller");
const app = express();

const port = 3000;

app.get("/", (req:any, res:any) => {
  res.status(200).json({
    status: "success",
  });
});

app.get("/", userController);

app.listen(port, () => {
  console.log(`Server running at: http://127.0.0.1:${port}`);
  mongoose.connect("mongodb://127.0.0.1/test").then(() => {
    console.log("Connected to mongo");
  }).catch((err:Error) => {
    console.log(`Mongo conn err: ${err}`);
  });
});
