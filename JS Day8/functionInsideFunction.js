// function inside function
// outfunction ==> innerFunction
function outfunction(){
    console.log("This is out of function");
    function innerFunction(){
        console.log("This is in of function");
    }
    innerFunction();
}
outfunction();
