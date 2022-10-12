console.log("This is project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validUser = false;
let validPhone = false;
// $('#failure').hide();
// $('#success').hide();

// console.log(name, email, phone);

name.addEventListener('blur', () => {
    console.log("Name is blurred");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Name is Valid");
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Name is invalid');
        name.classList.add('is-invalid');
        validUser = false;
    }

})

email.addEventListener('blur', () => {
    console.log("Email is blurred");
    //validate email here
    let regex = /^([_\-\.1-9a-zA-Z]+)@([_\-\.1-9a-zA-Z]+)\.([a-z]){2,5}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Email is Valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Email is invalid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("Phone is blurred");
    //validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Phone No is Valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Phone No is invalid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validUser && validEmail && validPhone) {
        let failure = document.getElementById('failure');

        console.log("Phone, Email, User are valid submitting the form");
        let success = document.getElementById('success');
         success.classList.add('show');
         failure.classList.remove('show');
     

    }
    else {
        console.log("Invalid information please coorect the information and then resubmit");
        let failure = document.getElementById('failure');
         failure.classList.add('show');
         success.classList.remove('show');
        

    }
})
