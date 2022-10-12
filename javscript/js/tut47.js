console.log("This is tut 47");

let regex = /hamza/;
// lets look into some metcharcter symbols
regex = /^hamzaa/;    //^ means expression will match if string start with
regex = /za$/;        //$ at the end means string end with
regex = /ha.za/;      // matches one character
regex = /ha*mz/;      // matches zero or more character
regex = /ha?mza?t/;      // ? after character means that char is optional
regex = /ha\*mza/
let str= 'ha*mza is codewith ';

let result = regex.exec(str);   
console.log("The result form exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}