const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// using ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
  res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
  ContentVisibilityAutoStateChangeEvent.log(hello);
})

app.listen(port,()=>{
  console.log(`listing on port ${port}`)
});