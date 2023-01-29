const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

router.get("/userList", async (req, res) => {
       const data = await Users.find()
        if(data){
            res.json({
                msg:"User list dispatch successfully",
                userList:data,
            })
        }else{
            res.json({
                msg: "There Are No Users!",
            })
        }
});

module.exports = router;