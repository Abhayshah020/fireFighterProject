const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt")

router.post("/login", async (req, res) => {
//     console.log(req.body)
//     const userId = await Users.findById( '63d2011a078e7b45a1c9fba5')

// console.log(userId)
    if (email) {
        const user = await Users.findOne({ email: req.body.email }).lean()
        if (user) {
            try {
                const { email, password } = user;
                const isMatched = bcrypt.compareSync(req.body.password, password)
                if (email && isMatched) {
                    const { password, ...refactoredUserObj } = user
                    res.json({
                        msg: "You have logged in successfully",
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
    } else {
        res.json({
            errorMsg: "Invalid AdminId"
        })
    }


});

module.exports = router;