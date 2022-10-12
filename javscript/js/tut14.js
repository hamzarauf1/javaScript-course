console.log("this is tut 14");

/*element selectors
1. single element selector
2. multi element selectors

*/

// 1. Single element selctors
// let element = document.getElementById("myFirst");
// //element = element.className;
// //element = element.childNodes;
// // element = element.parentNode;
// element.style.color= 'red';
//  element.innerText = "Hamza is a good boy";
//  element.innerHTML = '<b>Hamza is good boy</b>';
// // console.log(element.innerHTML);

// let sel = document.querySelector('#myFirst');
//  sel = document.querySelector('.home');
//  sel = document.querySelector('div'); // can return tags, div
//  sel.style.color = "green";

// console.log(sel);

//Multi element selector

//let elems = document.getElementsByClassName("child");
//elems = document.getElementsByClassName('container');
let elems = document.getElementsByTagName('div');
console.log(elems);
Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = ('blue');
});

// console.log(elems[0].getElementsByClassName("child"));

