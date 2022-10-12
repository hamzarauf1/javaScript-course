console.log('This is tut 20');

let impArray = ['adrak', 'piyaz', 'phindi'];
// localStorage.setItem('name', 'Hamza');
// localStorage.setItem('name2', 'imran');
// localStorage.setItem('sabzi', JSON.stringify(impArray));
// localStorage.clear();
localStorage.removeItem('name');
let name = localStorage.getItem('name');
name = JSON.parse(localStorage.getItem('sabzi'));
console.log(name);


// sessionStorage.setItem('sessionName', 'sHamza');
// sessionStorage.setItem('sessionName2', 'simran');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));