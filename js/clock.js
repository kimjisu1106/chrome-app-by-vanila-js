const clockH = document.querySelector("#clock span:first-child");
const clockM = document.querySelector("#clock span:last-child");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    clockH.innerText = hour;
    clockM.innerText = minute;
}

getClock();

setInterval(getClock,1000);