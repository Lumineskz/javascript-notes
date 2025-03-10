// Primitive Data type vs reference data types:
let num1 = 20;
let num2 = num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);
console.log(num2); // This doesn't change so its just a primitive data type

let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr1.push(6);
console.log(arr1);
console.log(arr2); // Both takes changes so hence taking reference, hence reference data types