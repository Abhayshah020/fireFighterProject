const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) => {
    try {
      const hash = await bcrypt.hashSync(req.body.password, 10);
      Users.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          req.body.password = hash
          const userData =  Users.create(req.body);
          if (userData) {
            res.json({ msg: "user is added" });
          } else {
            res.json({ errorMsg: "something went worng" });
          }
        } else {
          res.status(409).json({ errorMsg: "user already exists" });
        }
      });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;