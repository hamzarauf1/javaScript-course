console.log("Welcome to tutorial 12");
let a = document;
a = document.all;
// a = document.body;
// a = document.forms[0]
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// a = document.links[0].href;
// a = document.images;
// a = document.scripts[0];

Array.from(a).forEach(function(element){
    console.log(element);
})
console.log(a);