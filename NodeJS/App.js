const greet = (name)=>{
    return `Hello ${name}`
}

// console.log(greet('John'));
// console.log(global);

// globalThis.setInterval(()=>{console.log("mern stack course")},3000);
// console.log(__dirname);
// console.log(__filename);

// Module in nodeJS

// modules are blocks of encapsulated code that we use in our application.
// there are two ways to send the code from one file to another 

// 1. CommonJS

const {person , people} = require('./person');
// console.log(person );



// 2. ES module

const os = require('os');
const path = require('path');
console.log(path);
console.log(os.platform());
