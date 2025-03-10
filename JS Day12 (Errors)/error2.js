function checkAge(age){
    if(age<0){
        throw new Error("Age cannot be negative");
    } 
    return "Age is valid"
}

try{
    let result = checkAge(-5);
    console.log(result);
} catch (error){
    console.error("Error: ", error.message); // Output: Error:
}