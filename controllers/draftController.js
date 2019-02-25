const express = require("express");
const router = express.Router();
const path = require("path");
connection = require("../config/connection");
//add player model so that the api calls can update the data
const player = require("../models/player");



router.get("/", function(req, res){
     player.all("playerid", function(data){
          let avail = data.filter( o=>{
               return o.draftedBy == null;
          })
          let drafted = data.filter( o=>{
               return o.draftedBy != null;
          })
          
          player.allTeams(function(data){
               res.render("draftBoard", {title:"NFL DRAFT", players:avail, drafted : drafted, draftOrder:data});
          });
     })
})
router.get("/getPlayer/:id", function(req, res){
     let playID = req.params.id;
     player.getOne(playID, function(data){
          res.json(data);
     })     
})
router.get("/addRinger", function(req, res){
     res.render("addRinger");
})
router.get("/editPlayer", function(req, res){
     player.all("name", function(data){
          res.render("editPlayer", {players:data});
     })
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

router.post("/editPlayer", function(req, res){
     player.update("prating", req.body.prating ,req.body.playerid, function(data){
          res.render('draftBoard');

     })
})

module.exports = router;