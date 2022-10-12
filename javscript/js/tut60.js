console.log("This is tut 60");

//Destructuring in JavaScript

let a, b;
[a, b] = [34, 54];

// console.log(a,b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//Array destructuring
({ a, b, c, ...d } = { a: 22, b: 24, c: 32, d: 222, e: 477 });

// console.log(a,b,c,d)

const fruits = ['apple', 'banana', 'mango'];

[a, b, c] = fruits;
// console.log(a, b, c);

//Object destructuring
laptop = {
    model: "hp",
    age: '3 years',
    gender: 'male',
    net: 222,
    start: function(){console.log("Started")}
}

const {model,age,gender, net, start} = laptop;
console.log(model,age,gender, net, start);
start();