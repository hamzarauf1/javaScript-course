console.log("This is tut 16");

let element = document.createElement("li");
let text = document.createTextNode('I am a text node');
element.appendChild(text);

// set element class
element.className = 'childul';
element.id = 'created';
element.setAttribute('title', 'myTitle');
// innerText only return text
// element.innerText = 'Hello this is created by Hamza'
// // innerHTML return all text including tags
// element.innerHTML = '<b>Hello this is created by Hamza';
 
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let node = document.createTextNode('this is a created node for elem2');
elem2.appendChild(node);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('firstli'));
myul.removeChild(document.getElementById('lastli'));

let pr = elem2.getAttribute('id');
console.log(pr);
let ar = elem2.hasAttribute('class');
elem2.removeAttribute('class');
elem2.setAttribute('Title', 'myelem2Title');
console.log(elem2, ar);

// quizz 
// Create a heading element with text as "Go to google" and create an a tag outside it to href= "https://www.google.com"

let heading = document.createElement('h3');
heading.id = 'quiz1';
heading.innerHTML = '<a href="https://www.google.com">Go to Google</a>';
document.body.appendChild(heading);
console.log(heading);



