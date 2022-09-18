const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const xmasDate = new Date("Dec 25, 2022 00:00:00").getTime();

xmasCountdown();

function xmasCountdown() {
    const today = new Date().getTime();
    console.log(today)
    const dateGap = xmasDate - today;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60
    const day = hour * 24;
    
    const d = Math.floor(dateGap/day);
    const h = Math.floor((dateGap % day)/hour);
    const m = Math.floor((dateGap % hour)/minute);
    const s = Math.floor((dateGap % minute)/second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(xmasCountdown, 1000)
}