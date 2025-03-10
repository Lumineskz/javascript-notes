let numebrs = [1,2,3,4,5,6];
let newSplice = numebrs.splice(2,4);
console.log(numebrs);
console.log(newSplice);

let number = [1,2,3,4,5,6];
let sliced = number.slice(2,4); // Splits and slices it into two parts
console.log(number);
console.log(sliced); // Gets the number between (2,4) including the back value(4), i.e 3 and 4

// loop
let fruits = ["apple", "mango", "banana"]
let i;
for (i in fruits){
    console.log(fruits[i]);
}
for(i of fruits){ // In for of.. loop, it prints the initiator as the value of array
    console.log(i);
}

//