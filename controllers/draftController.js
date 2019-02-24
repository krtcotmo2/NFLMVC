const express = require("express");
const router = express.Router();

//add player model so that the api calls can update the data
const player = require("../models/player");

router.get("/", function(req, res){
     res.render("draftboard", {title:"NFL DRAFT"});
})


module.exports = router;