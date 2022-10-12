console.log("This is tut 48");
//regular expression:
        //basic functions
        //metacharacter symbols


//character sets -[]

    let regex = /h[a-z]mza/;      //  can be any character from a to z
    regex = /h[abc]mza/;          //  can be either a,t or y
    regex = /h[^abc]mza/;         //  can not be either a,t or y
    regex = /h[^abc]mz[au]/;      //  can not be either a,b or c and can be either a,t or y
regex = /h[a-zA-z]mz[a0-9][0-9]/  // we can have as many chracters sets as you want

//Quantifiers - we use {}

regex = /ham{2}za/;               // m can occur exactly 2 times
regex = /ha{0,2}mza/;             // a can occur 0, 1 or times
// const str = "hamza9 bhai";

// Groupings - we use paranthesis for groupings ()

regex = /(ham){2}([0-9]r){3}/

str = "hamham9r2r3r bhai";


let result = regex.exec(str);   
console.log("The result form exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}