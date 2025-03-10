// let a = Number(prompt("Enter your first Number:"));
// let b = Number(prompt("Enter your second Number:"));
// sum = a+b;
// document.write("The sum is " + sum);


// let isStudent = true;
// let hasLicense = false;
// console.log(isStudent && hasLicense); // f
// console.log(1*0); // 0
// console.log(isStudent || hasLicense); // t
// console.log(0+1); // 1
// console.log(!isStudent); // f

// let a = 10;
// let z = a++ // 10 11
// let z = ++a; // 11 11
// console.log(z);
// console.log(a);

// let arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr[0]); // [1, 2 ,3, 4]
// delete arr[0]; //delete 
// console.log(arr); // [<1 empty item>, 2, 3, 4]

// let person ={
//     name: "Shulabh",
//     age: 19,
// };
// console.log(person); // { name: 'Shulabh', age: 19 }
// delete person.age; 
// console.log(person); // { name: 'Shulabh'}

let num1 = 5;
let num2 = 3;
console.log(num1 & num2); // 1
console.log(num1 | num2); // 7
console.log(num1 ^ num2); // 6
console.log(~num1);
/* How?
5 = 0101
3 = 0011
======== Multiply (&)
    0001 = 1


5 = 0101
3 = 0011
========= Add( | )
    0111 = 7

5 = 00000000 00000000 00000000 00000101 (32 bit)
~5 = 11111111 11111111 11111111 11111010 = -6
*/

// Ternary Operator
// let isRaining = true; // Bring an umberella
let isRaining = false; // Enjoy the weather
let weatherMessage = isRaining
? "Bring an umberella."
: "Enjoy the weather";
console.log(weatherMessage);