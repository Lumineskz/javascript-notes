function fullName(fname, lname,callback,type){ // When given function to parameter it can be called too
    console.log("Hello " + fname + " " + lname);
    callback(type); // Calls the called-back function, usually without any type
    setTimeout(callback, 3000); // Sets a timer to which the function is executed 3000 = 3sec
}   // You can't use parameters inside of setTimeout unless: setTimeout(() => func(para),time); is used
function pizzaType(type){
    console.log("Your " + type + " pizza is ready!");
}
fullName('meow','meow', pizzaType, "Cheese")