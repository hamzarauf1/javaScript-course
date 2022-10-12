console.log("This is CV Screener");

const data = [
    {
        name: "Ali",
        age: 18,
        city: "Lahore",
        language: "Python",
        framework: "Django",
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: "Hassan",
        age: 20,
        city: "Islamabad",
        language: "JavaScript",
        framework: "Node JS",
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: "Haider",
        age: 25,
        city: "Lahore",
        language: "Java",
        framework: "Flutter",
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    }, {
        name: "Imran",
        age: 40,
        city: "Multan",
        language: "JavaScript",
        framework: "React",
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }, {
        name: "Zara",
        age: 23,
        city: "Lahore",
        language: "Swift",
        framework: "IOS",
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    }
]

// CV Iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}

// button listner

let next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidate = cvIterator(data);
nextCV();
function nextCV() {
    const currentCandidate = candidate.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!= undefined){
    image.innerHTML = `<img src= '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item"> Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item"> Uses ${currentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert("End of candidate applications");
        window.location.reload();
    }
}