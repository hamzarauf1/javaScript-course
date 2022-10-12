console.log("This is tut 58");

// set stores unique values
const mySet = new Set(); //Initialize an empty set
console.log("This is my set ", mySet);

// adding values to this set

mySet.add("this");
mySet.add("My name");
mySet.add("Hello"); 
mySet.add(788); 
mySet.add(true); 
console.log("The set look like this ", mySet);

//Use constructor to initialize the set
let mySet2 = new Set([1, 23, 'this', true, {a:4, b:33}])
console.log("New set", mySet2);

console.log(mySet.size);
console.log(mySet.has("Hello"));

console.log("Before removal", mySet.has('this'));
mySet.delete("this")
console.log("After removal", mySet.has('this'));

//Iterating a set

for(let item of mySet){
    console.log('Item is: ',item);
}

mySet.forEach((item)=>{
    console.log('Items are: ',item);
})

// coverting sets into array

let myArray = Array.from(mySet);
console.log("Values of my array ",myArray)