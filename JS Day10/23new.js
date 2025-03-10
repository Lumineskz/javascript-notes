var glbVar = "variable";
let glbLet = "let";
const glbConst = "const";


function Outer(){
    let college = "Uniglobe";
    console.log("Outer function: ", college);
    function inner(){
        console.log("Inner function: ", college);
    }
    inner();
}
Outer();

function Outer(){
    let college= "uniglobe";
    function Inner(){
        let location = "KTM";
        console.log(college);
        console.log(location);
        console.log(glbLet);
    }
    Inner();
}

function myFunc(){
    console.log("Suraj");
    return; // After return nothing is processed/outputed
    console.log("Suraj");
}
myFunc()