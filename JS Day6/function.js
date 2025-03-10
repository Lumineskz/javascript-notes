// function hi(){
//     console.log("Hello how are you?");
// }
// hi();
// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(3,4));

function calcGrade(marks){
  
if(marks >= 90){
    alert("A");
}
else if(marks >=80 && a < 90){
    alert("B");
}
else if(marks >=70 && a < 80){
    alert("C");
}
else{
    alert("D");
} 
/* let grade;
switch(true){
    case(a >= 90):
        grade = "A";
        break;
    case(a>=80):
        grade = "B";
        break;
    case(a>=70):
        grade = "C";
        break;
    default:
        grade = "D";
}
alert(grade);*/
}
let a = parseInt(prompt("Enter marks:"));
calcGrade(a);