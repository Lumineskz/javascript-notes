// 7.1 scope and closures
// global scope and local scope(function scope and block scope)
var globalVar = "I am global variable";
let globalLet = "I am global let";
const globalConst = "I am global const";

function globalFunc(){
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
globalFunc();

function fScope(){
    var scopeFunc = "I am function scope"; // Can not get called outside of function
    console.log(scopeFunc);
}
fScope();

for(let i = 0;i<=10;i++){
    console.log(i + "\t"); // The i is a block function and can only be used inside this particular for loop
}

// Below is another example of block scope
if(true){
    let age = 20; 
    const PI = 3.14; // age and PI are block functions of this if statement block
    console.log(age);
    console.log(PI);
}