const express = require("express");

const userController = express.router();

export default userController.get("/",
    (req:Express.Request, res:Express.Response) => {
      res.status(200).json({
        status: "success",
      });
    },
);
