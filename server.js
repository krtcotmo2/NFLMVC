const express = require("express");
const path = require("path");
const log = console.log;
let PORT = process.env.PORT || 8080;
const routes = require('./controllers/draftController');

let app = express();
app.use(express.urlencoded( {extended:true} ));
app.use(express.json());
app.use("/public", express.static(__dirname +"/public"));


const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use("/", routes);


app.listen(PORT, function(err){
     if(err) log("loe error" + err);
     log("connected on " + PORT);
})