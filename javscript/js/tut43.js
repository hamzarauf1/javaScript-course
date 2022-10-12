console.log("This is tut 43");

async function hamza(){
    console.log("Inside harry function");
    const response =  await fetch('https://api.github.com/users');
    console.log("Before response");
    const user = await response.json();
    console.log("Users resolved");
    return user;
    
    // return "Hamza";
}

console.log("Before calling function");
let a= hamza();
console.log("after calling function");
console.log(a);
a.then(data => console.log(data));
console.log("last line of this file");