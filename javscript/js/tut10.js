console.log("this is tutorial 10");

let name = "Hamza";
// it can also be 
//const mygreet = function(name , thank)  known as anonaymous function
function greet(name , thank){ 

let msg =  `Happy birthday ${name} 
I wish i could be there but My good wishes are with you always ${thank}`;
return msg;
}

let val = greet(name, "Thank you");
console.log(val);

const myobj = {
    name: "hamza",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game());


arr = ["fruits", "vegetables", "furniture"];

arr.forEach(function(element, index, array) {
    console.log(element, index);
});