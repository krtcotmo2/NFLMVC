const express = require("express");
const path = require("path");
const log = console.log;
let PORT = process.env.PORT || 8080;
const routes = require('./controllers/draftController,js');
const exphbs = require("express-handlebars");
let app = express();

app.use(express.urlencoded( {extended:true} ));
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);
//app.use("/", express.static(__dirname + "/"));
//app.use("/", routes);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");






app.listen(PORT, function(err){
     if(err) log("loe error" + err);
     log("connected on " + PORT);
})