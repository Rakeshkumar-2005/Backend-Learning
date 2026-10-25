// getting-started.js
const mongoose = require('mongoose');


main().then((res) =>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//define schema 

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number,
});


const User = mongoose.model("User",userSchema); // its become users
// const Employee = mongoose.model("Employee",userSchema);

// inserting data into mongoose
// const user1 = new User({
//   name:"adam",
//   email:"adam@gmail.com",
//   age:48
// });

// const user2 = new User({
//   name:"eve",
//   email:"eve@gmail.com",
//   age:48
// });
// user1.save(); // it return promise 

// user2
// .save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });


//insert many
User.insertMany([
  {name:"Tony",email:"tony@gmail.com",age:50},
  {name:"Bruce",email:"bruce@gmail.com",age:47},
  {name:"peter",email:"peter@gmail.com",age:30},
]).then((res)=>{
  console.log(res);
})
