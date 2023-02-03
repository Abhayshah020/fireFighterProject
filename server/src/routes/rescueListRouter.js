const express = require("express");
const RescueList = require("../models/rescueList");
const router = express.Router();

router.post("/rescueList", async (req, res) => {
  try {
    RescueList.findOne({ address: req.body.address }).then((rescue) => {
      if (!rescue) {
        const Data =  RescueList.create(req.body);
        if (Data) {
          res.json({
            msg: "The Rescue Mission Order Has Successfully Dispatch",
            isRescueOrder: true
        })
        } else {
          res.json({ msg: "something went worng" });
        }
      } else {
        res.json({ msg: "Rescue Mission Has Already Been Dispatched" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/rescueList", async (req, res) => {
    try {
          const totalRescueListLength = await RescueList.find()
          const data = await RescueList.find().limit(req.query.size).skip(req.query.size* req.query.page - req.query.size)
          if(data){
              res.json({
                  msg:"Rescue list dispatch successfully",
                  rescueList:data,
                  totalRescueListCount: totalRescueListLength.length
              })
          }else{
            res.json({
              msg:"There Are No Rescue Mission Orders",
            })
          }      
    } catch (err) {
      console.log(err);
    }
});

router.delete("/rescueList", async (req, res) => {
  try {
    const data = await RescueList.findByIdAndDelete(req.body._id)
    if(data){
      res.json({msg: 'Rescue Mission Deleted successfully'})
    }
  } catch (err) {
      console.log(err);
  }
  });

  router.put("/rescueList", async (req, res) => {
    try {
      const data = await RescueList.findByIdAndUpdate(req.body._id, req.body)
      if(data){
        res.json({
          msg: "Rescue Mission Updated Successfully!",
          isEdit:true
      })
      }
      else{
        res.json({msg:"something went wrong"})
      }
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;