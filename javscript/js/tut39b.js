console.log("This is tut 39b");


//pretend this response is coming from the server
const students = [
    { name: "Hamza", subject: "JavaScript" },
    { name: "Haider", subject: "Android" }
]

function enrollStudents(student) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`;
            document.getElementById('students').innerHTML = str;
        });
        console.log("Student has been Fetched");
    }, 1000);
}


let newStudent = { name: "ali", subject: "Machine Learning" };
enrollStudents(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("Error occured")
});