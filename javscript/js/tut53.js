console.log("This is tut 53");
// Genertors in JavaScript

function* numbersGen(){
    let i =0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
    while(true){
        yield i;
        i++;

        // yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);