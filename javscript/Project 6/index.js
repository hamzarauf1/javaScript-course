console.log("PostMan Clone");

//Utility function:
// 1. Utility function to get DOM element form string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}


// initialize no of params;
let addedParamCount = 0;

//Hide the parameters box initialy
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if the user clicks on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

})

// if the user clicks the json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';

})

// if users clicks on + add more paramets
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `          <div class="row g-3 my-1">
                                <label for="url" class="col-sm-2 col-form-label">Parameter</label>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} key"
                                        aria-label="City">
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} value"
                                        aria-label="State">
                                </div>
                                <div class="col-sm">
                                    <button class="btn btn-primary deleteParam">-</button>
                                </div>
                            </div>`;

    // convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // add an eventListner to remove the parameter on clicking the - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        })
    }
    addedParamCount++;
})

//if the user clicks on the submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show wait in the response box
    // document.getElementById('responseJsonText').value = "Fetching results please wait....";
    document.getElementById('responsePrism').innerHTML = "Fetching results please wait....";

    //fetch all the values user has entered
    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // if user has chosen params instead of json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};

        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {

                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }

    //log values in console for debugging
    console.log("URL is", url);
    console.log("RequestType is", requestType);
    console.log("contentType is", contentType);
    console.log("Data is ", data);

    //if request type is post, invoke fetch api to create a post request

    if (requestType=='GET'){
        fetch(url, {
            method: 'GET',
        })
        .then(response=> response.text())
        .then((text) =>{
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
            });
    }
    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
            });

 }



});