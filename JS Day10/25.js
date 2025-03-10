// es6 and modern javascript
// let and const
// arrow functions
function sum(a,b){
    return a+b;
}
console.log(sum(3,4));
// console.log(add(3,5));  // Arrow function is not hoistable
const add = (a,b) => a+b; // Arrow functions , Arrow function is not hoistable
console.log(add(3,5));
// template literals
let name = "Shulabh";
console.log("My name ",name);
console.log(`My name ${name}`); // Template ticks `
// default parameters
function Yourname(name = "Guest"){ // Default parameter is guest, if no value is entered the auto value will be "Guest"
    console.log(name);
}
Yourname("Suraj");
Yourname();
//rest and spread operators
// modules