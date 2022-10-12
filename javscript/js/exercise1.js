// You have to create a variable which is a string containing the text which is a link you are interested in.
//you have to fetch all the links form given page which contains this text
// javascript
console.log("This is solution to exercise");
let str = "javascript";
let links = document.links;
let href;
Array.from(links).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {

        console.log(href);
    }
})
