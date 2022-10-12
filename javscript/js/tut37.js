console.log("This is tut 37");

//pretend this response is coming from the server
const students = [
    { name: "Hamza", subject: "JavaScript" },
    { name: "Haider", subject: "Android" }
]

function enrollStudents(student, callBack) {
    setTimeout(function () {
        students.push(student);
        console.log("Student has been enrolled");
        callBack();
    }, 3000);
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
enrollStudents(newStudent, getStudents);
// getStudents();