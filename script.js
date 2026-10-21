// let n =5;

// for(let i=0;i<n;i++){
//   console.log("hello",i);
// }

// console.log("bye");

// console.log(process.argv);

// let args = process.argv;
// for(let i=2;i<args.lenght;i++){
//   console.log("hello & welcome to",args[i]);
// }


// const math = require("./math");
// console.log(math.sum(3,5));
// console.log(math.PI);

// const info = require("./fruits");
// console.log(info[0]);


import{sum,PI} from "./math.js";
console.log(sum(1,2));

import { generate } from "random-words";

console.log(generate());