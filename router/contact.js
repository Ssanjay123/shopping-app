const express = require("express");
const path = require("path")

const router = express.Router();

router.get("/contact-us",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","contact.html"))
})
router.post("/success",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","views","success.html"))
})
module.exports = router;