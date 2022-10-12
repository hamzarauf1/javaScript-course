console.log("This is solution to quizz")
/*
you have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div it should be converted into an editable item. whenever user clicks away (blur). wave the note into the local storage.

*/

let divElement = document.createElement('div');

let val = localStorage.getItem('text');
let text;
if(val== null){
 text = document.createTextNode(" This is node click to edit");
}
else{
    text= document.createTextNode(val);
}

divElement.appendChild(text);

divElement.setAttribute('id','elem');
divElement.setAttribute('class', 'elem');
divElement.setAttribute('style','border:2px solid black; width: 154px; margin: 34px; padding:23px');

let container = document.querySelector('.container');
let first  = document.getElementById('myFirst');
container.insertBefore(divElement,first);

divElement.addEventListener('click', function(){

    let noTextarea = document.getElementsByClassName('textarea').length;
    if(noTextarea == 0){
    let html = divElement.innerHTML;
    divElement.innerHTML = `<textarea id="textarea" class="form-control textarea" rows="3">${html}</textarea>`;
    }

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
    elem.innerHTML= textarea.value;
    localStorage.setItem ('text', textarea.value);
    })
});
