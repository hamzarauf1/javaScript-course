console.log("This is tut 18");
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log('Thank you its a single click', e);
//     e.preventDefault();
// };

// function func2(e) {
//     console.log('Thank you its a double click', e);
//     e.preventDefault();
// };

// function func3(e) {
//     console.log('Thank you its a mouse down', e);
//     e.preventDefault();
// };

// document.querySelector('.no').addEventListener('mouseenter', function () {

//     console.log("You have entered no");
// });

// document.querySelector('.no').addEventListener('mouseleave', function () {

//     console.log("You have left no");
// });

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
    console.log("You triggered mouse move event");
});