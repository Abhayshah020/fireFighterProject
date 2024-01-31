const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt")

router.post("/login", async (req, res) => {
    const userId = await Users.findOne({ adminId: req.body.adminId })
    if (userId) {
        if (req.body.email) {
            const user = await Users.findOne({ email: req.body.email }).lean()
            if (user) {
                if (user.role === "user") {
                    try {
                        const { email, password } = user;
                        const isMatched = bcrypt.compareSync(req.body.password, password)
                        if (email && isMatched) {
                            const { password, ...refactoredUserObj } = user
                            res.json({
                                msg: "You have logged in as User successfully",
                                isLogedin: true,
                                userData: refactoredUserObj
                            })
                        }
                        else {
                            res.json({
                                errorMsg: "Invalid Password"
                            })
                        }
                    }
                    catch (err) {
                        console.log(err)
                    }
                } else {
                    res.json({
                        errorMsg: "Admin cannot login using adminId"
                    })
                }
            }
            else {
                res.json({
                    errorMsg: "User doesn't exist"
                })
            }
        } else {
            res.json({
                errorMsg: "Invalid Email"
            })
        }
    }else if(req.body.adminId){
        res.json({
            errorMsg: "Invalid AdminId"
        })
    }else {
        if (req.body.email) {
            const user = await Users.findOne({ email: req.body.email }).lean()
            if (user) {
                if (user.role === "admin") {
                    try {
                        const { email, password } = user;
                        const isMatched = bcrypt.compareSync(req.body.password, password)
                        if (email && isMatched) {
                            const { password, ...refactoredUserObj } = user
                            res.json({
                                msg: "You have logged in as Admin successfully",
                                isLogedin: true,
                                userData: refactoredUserObj
                            })
                        }
                        else {
                            res.json({
                                errorMsg: "Invalid Password"
                            })
                        }
                    }
                    catch (err) {
                        console.log(err)
                    }
                } else {
                    res.json({
                        errorMsg: "User cannot login without AdminId"
                    })
                }
            }
            else {
                res.json({
                    errorMsg: "Admin doesn't exist"
                })
            }
        } else {
            res.json({
                errorMsg: "Invalid Email"
            })
        }
    }
});

module.exports = router;