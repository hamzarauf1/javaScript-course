//type conversion
console.log("Welcome to tutorial 5");

let myVar = String(34);
console.log(myVar, typeof myVar);

let booleanVar = true;
console.log(booleanVar, typeof booleanVar);

let str = Number(true);
console.log(str, typeof str);

let num = parseFloat("34.0147");
console.log(num.toFixed(20), typeof(num));  

//type coersion

let a = "454";
let b = 34;
console.log(a + b);