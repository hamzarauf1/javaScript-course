console.log("This is tu8");
const age = 48;
const vari = 64;
const doesDrive = true;

if(age!=19){
    console.log("age is not 19");
}

else if(age === 65){
    console.log("age is 65")
}

else{
    console.log("age is not 19");
}

if(typeof vari !== 'undefined'){
    console.log(" Vari is defined");
}
else{
    console.log("vari is not defined")
}

if(doesDrive || age>18){
    console.log("you can drive");
}
else{
    console.log("you can not drive");
}

console.log(age == 29? 'age is 29' : 'age is not 29');

switch (age) {
    case 18:
        console.log("You are 18");
        break;
    
        case 28:
        console.log("You are 28");
        break;
    
        case 38:
            console.log("You are 38");
            break;    

    default:
        console.log("your age is " + (age));
        break;
}