console.log('This is tut 59');

//Symbols
const sym1 = Symbol ('My identifier');
const sym2 = Symbol ('My identifier');

console.log("Symbol is ", sym1);
console.log('Type of symbol is ', typeof sym1);

console.log(sym1 === sym2);

const a = 'This  is';
const b = 'This  is';

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);


const k1 = Symbol('Identifier for k1'); 
const k2 = Symbol('For k2');

myObj ={};
myObj[k1] = "Hamza";
myObj[k2] = "Ali";
myObj["Name"] = "Good boy";
myObj[4] = "good int";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // !!Alert!! cannot do this because this will search for string as same as myobj["k2"]

//Sumbols are ignored in for-in loop
for(let key in myObj){
    console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));