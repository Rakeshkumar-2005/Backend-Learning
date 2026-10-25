const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chats.js");




app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));



main().then((res) =>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Index Route
app.get("/chats",async (req,res)=>{
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats})
})


// let chat1 = new Chat({
//   from:"neha",
//   to:"priya",
//   msg:"send me your exam sheet",
//   created_at: new Date(), // UTC form time
// });

// chat1.save().then(res => {console.log(res)});


app.get("/",(req,res)=>{
  res.send("root is working");
})

app.listen(8080,()=>{
  console.log("server is listening on port 8080")
})