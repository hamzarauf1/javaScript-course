console.log("This is tut 56 on for-in and for-of loops");

let people = ["Hamza", "Ali", "Haider", "Nabeel", "Umer"];


//Traditional for loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element)   
// }

let obj = {
    name: "Hamza",
    language:"JavaScript",
    hobbies: "Android app development"
}

// console.log(obj);

//Iterating an object using traditional for loop
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
    
}

//iterating an object using for-in loop
for(let key in obj){
    console.log(obj[key]);
}

let myString = "This is my string";
// we can use for-in to loop through all the characters
for(let key in myString){
    console.log(myString[key]);
}

//*************for-of loop****************/
console.log("************for-of loop*************")
people = ["Hamza", "Ali", "Haider", "Nabeel", "Umer"];

for(let name of people){
    console.log(name);
}