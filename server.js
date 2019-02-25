const express = require("express");
const path = require("path");
const log = console.log;
let PORT = process.env.PORT || 8080;
const draftroutes = require('./controllers/draftController.js');
const addroutes = require('./controllers/addController.js');
const updateRoutes = require('./controllers/updateController.js');
const exphbs = require("express-handlebars");
let app = express();

app.use(express.urlencoded( {extended:true} ));
app.use(express.json());
//app.use(express.static("public"));
//app.use("/", routes);
app.use("/", express.static(__dirname + "/"));
app.use("/", draftroutes);
//app.use("/", addroutes);
//app.use("/", updateRoutes);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.listen(process.env.PORT || 8080, function(err){
     if(err) log("log error" + err);
     log("connected on " + PORT);
})