function divide(a,b){
    if(b===0){
        throw new Error("Denominator cannot be 0");
    }
    return a/b;
}
try{
    let result = divide(4,0);
    console.log(result);
} catch(error){
    console.error("Error:",error.message);
}