const express = require("express");
const router = express.Router();
const path = require("path");
connection = require("../config/connection");
//add player model so that the api calls can update the data
const player = require("../models/player");

router.get("/", function(req, res){
     res.render("draftboard", {title:"NFL DRAFT"});
})


module.exports = router;