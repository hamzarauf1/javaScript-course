console.log("This is ajax tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the fetchBtn");

    //instantiate and xhr object
    const xhr = new XMLHttpRequest();

    //open xhr object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //use this for post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getAllResponseHeaders('content-type','application/x-www-form-urlencoded');
    
    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log("On Progress");
    }

    // xhr.onreadystatechange= function(){
    //     console.log('Ready state is ', xhr.readyState);
    // }

    //what to do when response is ready
    xhr.onload = function () {
        if(this.status===200){

            console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
        }
    }

    //send request
    params = "name=test&salary=123&age=23";
    xhr.send(params);

    console.log("We are done");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("You have clicked the popBtn");

    //instantiate and xhr object
    const xhr = new XMLHttpRequest();

    //open xhr object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    

    //what to do when response is ready
    xhr.onload = function () {
        if(this.status===200){

            let obj= JSON.parse(this.responseText);
            console.log(obj);
            let list= document.getElementById('list');
             str= "";
            for(key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
                console.log(str);
            }
            list.innerHTML= str;
        }
        else{
            console.error("Some error occured");
        }
    }

    //send request
    xhr.send();

    console.log("We are done");

}
