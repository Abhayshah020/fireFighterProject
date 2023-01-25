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
            res.json({
              msg: "Your Account is Registered successfully",
              isRegistered: true
          })
          } else {
            res.json({ msg: "something went worng" });
          }
        } else {
          res.json({ msg: "user already exists" });
        }
      });
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;