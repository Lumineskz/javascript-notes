// Functions
function biodata(){
    console.log("My name is Lumi");
}
biodata();

function greet() {
    console.log("Hello, World!");
  }
  console.log(greet); // Output: [Function: greet]
  console.log(typeof greet); // Output: function

  // Array
  let arr = ["Apple", "Ball", "Cat"];
  console.log(arr[0]); // Apple
  console.log(arr[1]); // Ball
  console.log(arr[2]); // Cat
  console.log(arr, typeof arr); // ["Apple", "Ball", "Cat"] object

  // Object
  let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
  };
  console.log(person);
  console.log(person.age);
  console.log(typeof person); // object