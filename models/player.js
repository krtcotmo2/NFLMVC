let  orm = require("../config/orm.js");

let player = {
     all:function(orderby, cb){
          orm.all("v_player_draft", orderby, function(data){
               cb(data);
          })
     },
     getOne:function(playerid, cb){
          orm.getOne(playerid, function(data){
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
     },
     update:function(cols, vals, playerid, cb){
          orm.update("players", cols, vals, playerid, function(res){
               cb(res);
          });
     },
     draftPlayer:function(pid, tid, pickNum, cb){
          orm.draftPlayer(pid, tid, pickNum, function(results){
               cb(results);
          } )
     }
}
module.exports = player;