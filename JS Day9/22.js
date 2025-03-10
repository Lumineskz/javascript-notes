// create 3 different for loop

// 1. square the given numbers
// 2. print even numbers
// 3. total sums

let num = [1, 2, 3, 4, 5];
let sqr = [];
let even = [];
// push
// For squaring of each terms
let i;
// for(i = 0;i<5;i++){
//     sqr.push(num[i] * num[i]); // push command
    
// }
// console.log(sqr);
console.log("\n");

// For even numbers of all array
for(i = 0;i<5;i++){
    if(num[i] % 2 == 0){
        even.push(num[i]); // push command
    }
}
console.log(even);

// For sum of all array 
console.log("\n");
var sum =0;
for(i = 0;i<5;i++){
    sum = sum + num[i];
}
console.log(sum);

// // for(i=0;i <= num.length; i++0){
//     sqr.push(num[i]*num[i]);
// // } OR

// Here's the mapping method of doing the squaring of numbers.
let sqrNum = num.map((number) => number * number);
console.log(sqrNum);

let evenNum = num.filter((number) => (number%2 === 0)); // Filter is used to filter specific conditioned values in an array
console.log(evenNum);   // put === 1 if want to print odd Numbers