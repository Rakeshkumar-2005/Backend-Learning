const express = require('express');
const app = express(); // this app -> help for creating sever 


const port = 8080


// server bann rahe hai
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});


//send request
app.get("/",(req,res)=>{
  res.send("hello !I am root ")
});


// quary string
app.get("/search",(req,res)=>{
 let {q}=req.query;
 if(!q){
  res.send(`<h1>nothing searched</h1>`)
 }
  res.send(`thses are the search result for our query : ${q}`);
})

// path paramrter
app.get("/:username",(req,res)=>{
  let {username,id}= req.params;
  let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
  res.send(htmlStr);
});


// app.get("/apple",(req,res)=>{
//   res.send({
//     name:"apple",
//     color:"red"
//   });
// });

//   app.get("/orange",(req,res)=>{
//   res.send("you contacted orange path")
// });

// app.post("/",(req,res)=>{
//   res.send("you send  post request to root ")
// });


//sending response
// app.use((req,res) => {
//   console.log("new incoming request");
  //sending request
//   res.send({
//     name:"rakesh",
//     color:"pink"
//   })
// });
