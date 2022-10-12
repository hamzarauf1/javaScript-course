console.log("This is tut 49");


// character classes
let regex = /\wam/;     // word charcter - _ or alphabet or number 
regex = /\w+9r/;         // +w means one or more word character
regex = /\Wam/;          // non word character
regex = /\W+/;           // \W+ means more than one non word characters
regex = /number \d/;     // \d means digit 
regex = /number \d+/;    // \d means more than one digit 
regex = /9\D/;           // \D means non digit 
regex = /bhai\D+/;       // \D means more than one non digit 
regex = /\ska number/;   // \s means match white space character    
regex = /\s+ka number/;  // \s+ means match one or more than one white space character    
regex = /\Ska number/;   // \S+ means match non white space character    
regex = /\S+ka number/;  // \S+ means match more than non white space character
regex = /2r3r\b/;          // word boundry     

// Assertions
regex = /b(?=h)/;
regex = /h(?!b)/;


str = "hamh%am9r2r3r bhaika number 89885454";



let result = regex.exec(str);   
console.log("The result form exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}