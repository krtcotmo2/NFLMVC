let  orm = require("../config/orm.js");

let player = {
     all:function(cb){
          orm.all("players", function(data){
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