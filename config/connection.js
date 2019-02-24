const sql = require("mysql");
const keys = require("./keys");
let connection;

if (process.env.JAWSDB_URL) {
     connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
     connection = mySQL.createConnection(keys.sqlKeys);
}

//make connection
connection.connect(function (err) {
     if (err) {
          console.error("error connecting: " + err.stack);
          return;
     }
     console.log("connected as id " + connection.threadId);
});

module.exports = connection;