// function expressions
// function myVariable(){

// }
// myVariable();

// const myVariable = function(){

// }
// myVariable();


// Function declaration
function mul(a,b){
    return a*b;
};
let total = mul(5,10);
console.log(total);

// Function expressions
const mult = function (a,b){
    return a*b;
};
console.log(mult(5,10));

// Use a function expression to greet yourself, passing parameters.
const greet = function(name){
    // return "Hello " + name;
    return `Hello ${name}`;
}
console.log(greet("Shulabh")); 

// Arrow function
const addd = (a, b) => {
    return a + b; // Shortcut way of creating function.
};
console.log(addd(2,5));

const oddEven = (n) => {
    if(n%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
};
console.log(oddEven(3)); 

// Default parameters and rest parameters
function subs(a,b){
    return a-b;
}
console.log(subs()); // Leaving values empty will result in NaN

const greeting = function(name){ // Alternative put function(name = "User") then return `Hello ${name}`
    // return "Hello User" if there is no name given
    if(name == undefined || name == ""){
        return `Hello User`;
    }
    else{
        return `Hello ${name}`;
    }
}
console.log(greeting()); 
console.log(greeting("Shulabh"));

function numbers(a,b, ...rest){
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    console.log(`Remaining : ${rest}`);
}
numbers(1,2,3,4,5,6,7,8,9,10);