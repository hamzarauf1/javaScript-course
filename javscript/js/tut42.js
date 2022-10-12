console.log("This is tut 42");

let btn = document.getElementById('myBtn');

let content = document.getElementById('content');


// function getData(){
//     console.log("started getData")
//     let url ='hamza.txt';
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }


// function getData(){
//     console.log("started getData")
//     let url ='https://api.github.com/users';
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

function postData(){
    console.log("started getData")
    let url ='https://dummy.restapiexample.com/api/v1/create';
    let data = '{"name":"test","salary":"123","age":"23"}';

    params= {
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    //because single line arrow function
    fetch(url, params).then(response => response.json())
    .then(data=>console.log(data));
    
}

// console.log("Before running data");
// getData();
// console.log("After running data");

postData();