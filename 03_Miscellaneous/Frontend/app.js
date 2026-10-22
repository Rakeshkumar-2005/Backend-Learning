// oops concept 

// const student1 = {
//   nane:"adam",
//   age:23,
//   marks:30
// };

// const student2 = {
//   nane:"baap",
//   age:22,
//   marks:310
// };

// const student = {
//   nane:"aapp",
//   age:23,
//   marks:30
// };

// student buleprint bana lenge too  uske baad baar baar define nhi karna padega 


// 01.functory function 
// function PersonMaker (name,age) {
//   const person = {
//     name : name,
//     age : age,
//     talk(){
//       console.log(`Hi , MY name is  ${name}`);
//     }
//   }
//   return person;
// }

// let p1 = PersonMaker("Rakesh",21); // copy
// let p2 = PersonMaker("Rajan",21); //copy 




// 02.new operator
// constructor -> doesn't return anyhting & start with capital letter
// function Person (name,age) {
//   this.name = name;
//   this.age = age;

// }

// Person.prototype.talk = function(){
//   console.log(`Hi, My name is ${this.name}`);
// }


// let p1 = new Person("adam",21);
// let p2 = new Person("even",10);

//03. classes

class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  talk(){
    console.log(`Hi , My name is ${this.name}`);
  }
}

let p1 = new Person("adam",20);
let p2 = new  Person("bob",90);


// inhreitance 
