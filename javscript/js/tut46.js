console.log("This is tut 46");

let reg = /hamza/;       //This is regular expression literal in js
reg= /hamza/g;          // g means global     
// reg= /hamza/i;          // i means case insensitive     

// console.log(reg);
// console.log(reg.source);

let s = 'It is great to code with hamza and hamza is a great coder';

//Function to match expression
// 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(s);
// result= reg.exec(s); 
// console.log(result); 
// result= reg.exec(s); 
// console.log(result);   --->  we can use multiple exac() with global flag 

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }


// 2. test() return true or flase
let result2 = reg.test(s);
// console.log(result2);   ---> This will only print true if 'reg' is present in 's'


// 3. match() it will return an array of results or null
// let result3= reg.match(s); ---> This is wrong!!
let result3= s.match(reg);    // ---> This is right
// console.log(result3);


// 4. search() - Return index of first match else -1
let result4= s.search(reg);
// console.log(result4);


// 5. replace() - returns new replaced string with all the replacements
let result5= s.replace(reg, "ali");
console.log(result5);
