console.log("This is tut 54");

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(){
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate -now;
    console.log(timeToAlarm);
    if(timeToAlarm >= 0){
        setTimeout(() => {
            console.log("Ring now");
            play();
        }, timeToAlarm);
    }
}



