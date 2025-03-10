try{
    let num = undefined;
    console.log(num.toLowerCase());
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
