const express = require("express");
const Users = require("../models/Users");
const router = express.Router();


router.get("/addressList", async (req, res) => {
    try {
       const data = await Users.find()
    //    console.log(data)
        if(data){
            res.json({
                msg:"User list dispatch successfully",
                addressList:data,
            })
        }else{
            res.json({
                msg: "There Are No Users!",
            })
        }
    } catch (err) {
        console.log(err);
      }
});

module.exports = router;