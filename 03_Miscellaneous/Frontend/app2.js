// class Person{
//   constructor(name,age){
//     console.log("person class constuctor")
//     this.name = name;
//     this.age = age;
//   }
//   talk(){
//     console.log(`Hi, I am ${this.name}`);
//   }
// }

// class Student extends Person{
//   constructor(name,age,marks){
//     console.log("Student class constuctor")
//     super(name,age); // parent class constructor is being called 
//     this.marks = marks;
//   }
// }



// class Teacher extends Person{
//   constructor(name,age,subject){
//     super(name,age);  // parent class constructor is being called 
//     this.subject = subject;
//   }

// }


// another example

class Mammals{ // base class / parent
  constructor(name){
    this.name = name;
    this.type = "warm-blooded";
  }
  eat(){
    console.log("I am Eating");
  }
}

class Dog extends Mammals{
  constructor(name){
    super(name);
  }
  bark(){
    console.log("woof...");
  }
  eat(){
    console.log("dog is eating...")
  }
}

class cat extends Mammals{
  constructor(name){
    super(name);
  }
  meow(){
    console.log("meow...");
  }
}