let  orm = require("../config/orm.js");

let player = {
     all:function(cb){
          orm.all("v_player_draft", "playerid", function(data){
               cb(data);
          })
     },
     allTeams:function(cb){
          orm.all("teams", "draftOrder", function(data){
               cb(data);
          })
     },
     resetAll:function(cb){
          orm.resetAll("players", "draftedBy", "NULL", function(data){
               cb(data);
          })
     },
     addPlayer:function(cols, vals, cb){
          orm.addPlayer("players", cols, vals, function(res){
               cb(res);
          });       
     }
}
module.exports = player;