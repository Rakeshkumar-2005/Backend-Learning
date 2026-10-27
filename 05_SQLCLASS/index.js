const { faker, id_ID } = require('@faker-js/faker');
const express  = require("express");
const app = express();
const mysql = require('mysql2');
const path = require ("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'7633002506',
});

let getRandomUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
 ];
}

// Home
app.get("/",(req,res)=>{
  let q = `select count(*)from user`;
  try {connection.query(q,(err,result)=>{
  if(err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
})
}
catch(err){
  console.log(err);
  res.send("some error in DB");
}
});


//Shoow user route
app.get("/user",(req,res)=>{
  let q = `select * from user`;
  try {connection.query(q,(err,users)=>{
  if(err) throw err;
    res.render("showusers.ejs",{users});
  });
}
catch(err){
  console.log(err);
  res.send("some error in DB");
}
});


// Edit route

app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
        res.render("edit.ejs",{user});
  });
}
catch(err){
  console.log(err);
  res.send("some error in DB");
}
});

//update route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password:formPass, username:newUsername }= req.body;
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("wrong password")
      }else{
        let q2 = `update user set username = '${newUsername}' where id='${id}'`;
        connection.query(q2,(err,result) =>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
  });
}
catch(err){
  console.log(err);
  res.send("some error in DB");
}
});


app.listen("8080",()=>{
  console.log("server is listening to port:8080");
});


// let q = "SHOW TABLES";
//insertinng new data
// const q = `
//   INSERT INTO user (id, username, email, password)
//   VALUES ?
// `;


// let users = [["123b","123_newuserb","abc@gmail.comb","abcb"]
// , ["123c","123_newuserc","abc@gmail.comc","abcc"]];

// let data= [];
// for(let i=0;i<100;i++){
//   data.push(getRandomUser()); // 100 fake user
// }

// try {connection.query(q,[data],(err,result)=>{
//   if(err) throw err;
//     console.log(result);
// })
// }
// catch(err){
//   console.log(err);
// }

// connection.end();
