console.log("this is tut 6");
const name = 'Hamza';
const greetings = "Good Morning";
console.log(name + ' ' + greetings);

let html1, html2;
html1 = "<h1> this is HEADING</h1>";
html2 = "<p> this is pargraph</p>";
// html = html.concat("this "+ " That");
let result = html1.concat(" ", html2);
console.log(result);
console.log(result.length);
console.log(result.toUpperCase());
console.log(result.toLowerCase());



console.log(result[1]);
console.log(result.indexOf('this'));
console.log(result.lastIndexOf('this'));
console.log(result.charAt(0));
console.log(result.endsWith('</p>'));
console.log(result.includes('abc'));
console.log(result.substring(0, 15));
console.log(result.slice(0, 4));
console.log(result.split(" "));
console.log(result.replace("this", "it"));


let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is heading </h1>
            <p> You like ${fruit1} and ${fruit2}
`;
document.body.innerHTML = myHtml;

let car1 = "BMW";
let car2 = "Audi";
let car3 = "Mercedes";

let favCar = ` Hello ${name}
            <h1> Which is your favourite car ? </h1>
            <ol>
            <li>${car1}</li>
             <li>${car2}</li>
             <li>${car3}</li>
            </ol>
            `;
            document.body.innerHTML = favCar;