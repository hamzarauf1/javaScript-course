console.log("This is tut 57");

//Maps is javascript: we can any type  of key or value

const myMap = new Map();

let key1 = 'myString', key2 = {}, key3 = function () { };

//setting map value

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is an object');
myMap.set(key3, 'This is a function');

// can also set values like this
// myMap.set('My String', 1);
// myMap.set({}, 2);
// myMap.set(function(){}, 3);

console.log(myMap);

// Getting the values form the map

let value1 = myMap.get(key1);
console.log(value1);

//Get the size of map
console.log(myMap.size)

//You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Get only keys
for (let key of myMap.keys()) {
    console.log('Key is ', key);
}

// Get only values
for (let value of myMap.values()) {
    console.log('Value is ', value)
}

//You can loop through using for each loop
myMap.forEach((value, key) => {
    console.log('Key is ', key);
    console.log('Value is ', value);
})

// converting map to an array

let myArray = Array.from(myMap);
console.log("Map to array is", myArray);

//Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log("Key to Array ", myKeysArray);

//Converting map values to array        
let myValuesArray = Array.from(myMap.values());
console.log("Values to Array ", myValuesArray)