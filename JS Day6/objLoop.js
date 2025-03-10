const person ={
    name: "Shulabh",
    age: 50,
    role: "developer",
};
for(let obj in person){
    console.log(obj);
    console.log(person[obj]);
}

let arr = ["Apple", "Ball", "Cat"];
for(let i in arr){
    console.log(arr[i]);
}