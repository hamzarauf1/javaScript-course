console.log("welcome to notes app");
showNotes();


// If user adds a note add it to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value

    }

    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value= '';
    console.log(notesObj);

    showNotes();

})
 
// Function to show notes from local storage
function showNotes(){
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html= '';
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
        `;       
    });
    let noteElem = document.getElementById('notes');
    if(notesObj != 0){
        noteElem.innerHTML = html;
    }
    else{
        noteElem.innerHTML = `Nothing to show! "Add a Note" section above to add note`;
    }
};

function deleteNote(index){

    console.log("i am deleting ", index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

let serach = document.getElementById('searchTxt');
serach.addEventListener('input', function(){

    let inputVal = serach.value.toLowerCase();
    console.log("input event fired", inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
       Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerHTML;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    
   })

})