const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

router.get("/userList", async (req, res) => {
    try {
        const notInculdedAdmin = { role: { $nin:['admin'] } }
       const totalUsersListlength= await Users.find()
       const data = await Users.find(notInculdedAdmin).limit(req.query.size).skip(req.query.size* req.query.page - req.query.size)
        if(data){
            res.json({
                msg:"User list dispatch successfully",
                userList:data,
                totalUsersListlength: totalUsersListlength.length
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