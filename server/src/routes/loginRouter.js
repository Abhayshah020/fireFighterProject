const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt")

router.post("/login", async (req, res) => {
    const user = await Users.findOne({ email: req.body.email }).lean()
    if (user) {
        try {
            const {email,password} = user;
            const isMatched= bcrypt.compareSync(req.body.password, password)
            if (email && isMatched) {
                const { password, ...refactoredUserObj } = user
                res.json({
                    msg: "logged in successfully",
                    isLogedin: true,
                    userData: refactoredUserObj
                })
            }
            else {
                res.json({
                    errorMsg: "Invalid username or password"
                })
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    else {
        res.json({
            errorMsg: "User doesn't exist"
        })
    }

});

module.exports = router;