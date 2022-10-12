console.log("This is tut 17");

document.getElementById('heading').addEventListener
('click', function(e){
    let variable;
    console.log("You have clicked the heading");
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;

    console.log(variable);
// location.href = '//google.com';
});