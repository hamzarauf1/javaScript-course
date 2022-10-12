console.log("This is clock")

const clock = document.getElementById("clock");

function updateTime() {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    clock.innerHTML = currentTime;
}

setInterval(() => {
    updateTime();
}, 1000);