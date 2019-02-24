let connection = require("./connection");

function printQuestionMarks(num) {
     var arr = [];
   
     for (var i = 0; i < num; i++) {
       arr.push("?");
     }
   
     return arr.toString();
   }


let orm = {
     all : function (tableName, cb){
          let query = `SELECT * FROM ${tableName}`;
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
     addPlayer : function(table, cols, vals, cb) {
          var queryString = "INSERT INTO " + table;
          queryString += " (";
          queryString += cols.toString();
          queryString += ") ";
          queryString += "VALUES (";
          queryString += printQuestionMarks(vals.length);
          queryString += ") ";
          console.log(queryString);
          connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
        },
}

module.exports = orm;