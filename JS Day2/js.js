// 1. primitive vs reference
// String, number, boolean, undefined, null, bigint, symbol
let name = " Suraj ";
console.log(name);
console.log(typeof name);

let num = 5;
console.log(num, typeof num);

let isTrue = true;
console.log(isTrue, typeof isTrue);

let myNum = Number.MAX_SAFE_INTEGER;
let myNum1 = Number.MIN_SAFE_INTEGER;
console.log(myNum + 1);
console.log(myNum + 2);
console.log(myNum + 3);

//BigInt
let myBigInt = BigInt(131231);
console.log(myBigInt, typeof myBigInt);

let a1 = "This is me";
let b1 = "This is me";


let a11 = Symbol("This is me");
let b11 = Symbol("This is me");

console.log(a11 == b11);
//2. Reference
// function, array, objects
