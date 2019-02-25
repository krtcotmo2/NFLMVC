const express = require("express");
const router = express.Router();
const path = require("path");
connection = require("../config/connection");
//add player model so that the api calls can update the data
const player = require("../models/player");



router.get("/", function(req, res){
     player.all(function(data){
          let avail = data.filter( o=>{
               return o.draftedBy == null;
          })
          let drafted = data.filter( o=>{
               return o.draftedBy != null;
          })
          /*
          player.allTeams(function(data){
               console.log(data);
          });
          */
          res.render("draftBoard", {title:"NFL DRAFT", players:avail, drafted : drafted, draftOrder:data});
     })
})

router.get("/addRinger", function(req, res){
     res.render("addRinger");
})
router.get("/editPlayer", git pull origin mafunction(req, res){
     res.render("editPlayer");
})

router.post("/resetAll", function(req, res){
     player.resetAll(function(data){
          return res.send(data);
     })
})

router.post("/addRinger", function(req, res){
     player.addPlayer(["name", "prating", "position"], [req.body.name, req.body.prating, req.body.position], function(data){
          res.render('draftBoard');

     })
})

module.exports = router;