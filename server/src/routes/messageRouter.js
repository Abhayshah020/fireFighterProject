const express = require("express");

const Message = require("../models/message");
const router = express.Router();


router.post("/message", async (req, res) => {
    
    try {
        const userData =  Message.create(req.body);
        res.json({
            msg: "Your message was send successfully",
            userData:userData
        })
    } catch (err) {
      console.log(err);

    }
  });

  router.get("/message", async (req, res) => {
    const data = await Message.find()
     if(data){
         res.json({
             msg:"User message list dispatch successfully",
             userMessageList:data,
         })
     }else{
         res.json({
             msg: "There Are No Users message!",
         })
     }
});


module.exports = router;