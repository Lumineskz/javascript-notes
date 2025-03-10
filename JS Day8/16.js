// Parameter Destructing
const person1 = {
    name: "Meow",
    age: 50,
    occupation: "Meowing"
}
// function fullInfo(obj){ 
//     let a;
//         console.log(obj.name);
//         console.log(obj.age);
//         console.log(obj.occupation);
// }
const person2 ={
    name: "Bark",
    age: 40,
    occupation: "Woof"
}
function fullInfo({name, age, occupation}){ // Can directly access data inside of the object without using obj.
        console.log(name);
        console.log(age);
        console.log(occupation);
}
fullInfo(person1)
fullInfo(person2)