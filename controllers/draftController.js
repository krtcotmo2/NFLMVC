const express = require("express");
const router = express.Router();
const path = require("path");
connection = require("../config/connection");
const player = require("../models/player");


//STANDARD HTML ROUTES
router.get("/", function(req, res){
     player.all("pickNum", function(data){
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
router.get("/draftBoard", function(req, res){
     res.render('draftBoard');
})
router.get("/addRinger", function(req, res){
     res.render("addRinger");
})

//API GET ROUTES
router.get("/editPlayer", function(req, res){
     player.all("name", function(data){
          res.render("editPlayer", {players:data});
     })
})
router.get("/getPlayer/:id", function(req, res){
     let playID = req.params.id;
     player.getOne(playID, function(data){
          res.json(data);
     })     
})

//API POST ROUTES
router.post("/resetAll", function(req, res){
     player.resetAll(function(data){
          res.json(data);
     })
})
router.post("/addRinger", function(req, res){
     player.addPlayer(["name", "prating", "position"], [req.body.name, req.body.prating, req.body.position], function(data){
          res.json(data)          
     })
})
router.post("/editPlayer", function(req, res){
     player.update("prating", req.body.prating ,req.body.playerid, function(data){
          res.json(data);
     })
})

router.post("/draftPlayer", function(req, res){
     player.draftPlayer(req.body.playerid, req.body.teamid, req.body.pickNum, function(data){
         res.json(data);
     })
})

module.exports = router;