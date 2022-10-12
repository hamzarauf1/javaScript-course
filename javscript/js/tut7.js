console.log("this is tut 7 and lets discuss about arrays");

let marks = [34, 44, 50, 41, 29];
const fruits = ["Apple", "oranges", "pineapple"];
const mixed = [ "banana", 54, 87, [7, 8]];

const arr = new Array(21, 45, 87, "Abc");

console.log(arr);
console.log(mixed[3]);
console.log(fruits[0]);
console.log(arr.length);
console.log(Array.isArray(mixed));
console.log(arr.length);
arr[0] = "Hamza";
console.log(arr);
console.log(arr.length);

let arrelement = arr[0];
console.log('element:', arrelement);
let value = marks.indexOf(41);
console.log(value);

// Mutating or modifyinh array

marks.push(41);
console.log(marks);
marks.unshift(444);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(1, 3);
console.log(marks);
marks.reverse();
console.log(marks);
let marks2 = [1, 5, 88, 725];
marks = marks.concat(marks2);
console.log(marks);

let myObj = {
    name : "hamza",
    isActive : true,
    marks: [1, 3, 5 ]
}
console.log(myObj);
console.log(myObj.isActive);
console.log(myObj.name);
console.log(myObj['name']);
