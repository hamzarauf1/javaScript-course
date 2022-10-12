console.log("This is tut 15");

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeName);
// console.log(nodeType);

// Node Types
// 1. Elements
// 2. Attributes
// .
// .
// 12 Notation
// console.log(cont.childNodes);
// console.log(cont.children);



let container = document.querySelector('.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);