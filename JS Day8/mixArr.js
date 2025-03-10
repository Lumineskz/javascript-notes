let arr1 = [1,2,3,4,5];
let arr2 = ["Apple", "Banana", "Cat"]
let mixedArr = [1,2,3,"Apple", null, undefined]

// Accessing and modifying array
console.log(arr2[0]);

arr2[1] = "Mango";
console.log(arr2);

// push, pop, unshift and shift
arr2.push("Dog");
console.log(arr2); // Push : Puts in the end of array
// Pop : Deletes the end of array
// Unshift :
// SHift :
arr2.shift() // Shifts to the left, eliminating the first element of the array
console.log(arr2);

arr2.unshift("Dog"); // Unshifts the shifted element
console.log(arr2); 