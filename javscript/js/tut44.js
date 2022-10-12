console.log("This is tut 44");

let a= "Hamza bhai";
a =undefined;

if(a != undefined){
   throw Error("This is not undefined");
}

else{
    console.log("This is undefined");
}

try {
    // kjdkjsjkdksj
    console.log("We are inside try block");
    functionhamza();
} catch (error) {
    console.log("are you OK");
    // console.log(error.name);
    console.log(error.message);
} finally{
    console.log("We will run this");
}
