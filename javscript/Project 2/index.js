console.log("This is index.js");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {

}

//Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody')
    let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `
    tableBody.innerHTML += uiString;

}
// implement the clear method
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implement validate method
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

//implement show method
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message! </strong>${displayMessage} 
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`

    setTimeout(function () {
        message.innerHTML = ''
    }, 3000);
}


// add submit event listner to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('bookAuthor').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }

    else if (programming.checked) {
        type = programming.value;
    }

    else if (cooking.checked) {
        type = cooking.value;
    }

    let library = localStorage.getItem('tableBody');
    if(tableBody===null){
        libraryObj= [];
    }
    else{
        libraryObj= JSON.parse(library);
    }
    let myObj = {
        name:bookName.value,
        author:bookAuthor.value,
        
    }
    libraryObj.push(myObj);
    localStorage.setItem('tableBody', JSON.stringify(libraryObj));
    console.log(libraryObj);


    let book = new Book(name, author, type);
    console.log(book);



    let display = new Display();


    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added.');
    }

    else {
        //Show error to user
        display.show('danger', 'Sorry your book cannot be added.')
    }

    e.preventDefault();

}