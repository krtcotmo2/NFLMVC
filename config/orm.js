let connection = require("./connection");

function printQuestionMarks(num) {
     var arr = [];
   
     for (var i = 0; i < num; i++) {
       arr.push("?");
     }
   
     return arr.toString();
   }


let orm = {
     all : function (tableName, colName, cb){
          let query = `SELECT * FROM ${tableName} ORDER BY ${colName}`;
          connection.query(query, function(err, data){
               if(err) throw err;
               cb(data);
          })
     }, 
     resetAll : function(tableName , columnName, val, cb){
          let query =   `UPDATE ${tableName} SET ${columnName} = ${val}`;
          connection.query(query, function(err, data){
               if(err) throw err;
               cb(data);
          })
     },
     getOne:function(playerid, cb){
          let query =   `SELECT * FROM players WHERE playerid = ${playerid}`;
          connection.query(query, function(err, data){
               if(err) throw err;
               cb(data);
          })
     },
     addPlayer : function(table, cols, vals, cb) {
          var queryString = "INSERT INTO " + table;
          queryString += " (";
          queryString += cols.toString();
          queryString += ") ";
          queryString += "VALUES (";
          queryString += printQuestionMarks(vals.length);
          queryString += ") ";
          connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
     },
     update:function(tableName, colName,  colval, playerid, cb){
          let query =   `UPDATE ${tableName} SET ${colName} = ${colval}  WHERE playerid = ${playerid}`;
          connection.query(query, function(err, data){
               if(err) throw err;
               cb(data);
          })
     }
}

module.exports = orm;