try{
    let num = undefined; // Error doesn't show if value is string i.e. "Shulabh"
    console.log(num.toLowerCase()); // This is because toLowerCase() only accepts string values
} catch(error){ // Catch only displays if there is an error
    console.log(error.name); // Shows name of error
    console.log(error.message); // Shows error message
    console.log(error.stack); // Stack shows line number
} finally{ //Finally runs whether or not error has occured or not
    console.log("This is completed");
}
