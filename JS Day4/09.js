// Type Conversion
 let name = "123"
 console.log(name, typeof name);

 let name1 =  +"123"; // Writing + in front of the string is equal to typing parseInt, Number etc.
 console.log(name1, typeof name1);
 let name2 = Number("123");
 console.log(name2, typeof name2);

 let age1 = 20 + ""; // Adding ' + "" ' in the side of number makes it a string.
 console.log(age1, typeof age1);
// age 3 = String(20);
 let age2 = (true).toString();
 console.log(age2, typeof age2);

 let num = Boolean(1);
 let num2 = Boolean(0);
 let num3 = Boolean("");
 let num4 = Boolean("Hello");

 console.log(num, num2, num3, num4);