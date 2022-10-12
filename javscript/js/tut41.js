console.log("This is tut 41");

//this is normal function

// const hamza = function(){
//     console.log("This is the best person ever");
// }

// hamza();

//this is arrow function
// const hamza =()=>{
//     console.log("this is the best person ever");
// }

// hamza();

//function returning something
// const greet= function(){
//         return "Good morning"
// }
// console.log(greet());

//one liners do not require braces/return

// const greet = ()=> "Good morning";

// const greet= ()=> ({Name:"Hamza"});

// single paraeters do not require paranthesis but you will have to put paranthesis if there are multiple parameters
// const greet= name => "Good Morning "+ name; 
const greet= (name, ending) => "Good morning "+ name + ending;


console.log(greet("Hamza", " Bye"));