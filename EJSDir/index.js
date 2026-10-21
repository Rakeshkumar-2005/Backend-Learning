const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// using ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))


// render 
app.get("/",(req,res)=>{
  res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
  console.log("hello");
})


//passing data to Ejs
app.get("/rolldice",(req,res)=>{
  let num = Math.floor(Math.random()*6) + 1 ;
  res.render("rolldice.ejs",{ num : num});
});


// create instagram route activity
app.get("/ig/:username",(req,res)=>{
  const followers = ["adam","bob","abc"];
  let {username} = req.params;
  res.render("instagram.ejs",{username, followers})
});


app.listen(port,()=>{
  console.log(`listing on port ${port}`)
});