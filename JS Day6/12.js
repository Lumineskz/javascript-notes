// let a = parseInt(prompt("Enter marks:"));
// if(a >= 90){
//     alert("A");
// }
// else if(a >=80 && a < 90){
//     alert("B");
// }
// else if(a >=70 && a < 80){
//     alert("C");
// }
// else{
//     alert("D");
// }
let grade;
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
alert(grade);
