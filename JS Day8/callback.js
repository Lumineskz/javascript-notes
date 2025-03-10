// Callback functions.
function firstFunction(para){
    console.log(para);
    console.log("This is first function");
}
firstFunction("Meow meow"); // Function can send any type of data as paramenter to the function for interpretaion

function secondFunction(){
    console.log("This is Second function");
}
firstFunction(secondFunction); // FUNCTIONS CAN ALSO BE PARAMETERS? WTF?

function thirdFunction(callback){
    console.log("Meow meow meow");
    callback();
}
function fourthFunction(){
    console.log("Meow meow meow meow");
}
thirdFunction("ABC");

// Higher order functions


