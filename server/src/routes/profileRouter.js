const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('avatar')

router.post('/profile', upload, async (req, res) => {
    // console.log(req.file.filename )
    const data = await Users.findByIdAndUpdate(req.body._id, { avatarName: req.file.filename }).lean()
    if (data) {
        res.json({
            msg: "Profile image Uploaded Successfully",
        })
    }else{
        res.json({
            msg: "Profile image was unable to upload, Please try again!",
        })
    }
})


router.get('/credentialsProfile/:id', async (req, res) => {
    try {
        const data = await Users.findById(req.params.id)
        if (data) {
            res.json({
                userDetails: data
            })
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;