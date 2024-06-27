const startbutton = document.getElementById("start");
const stopbutton = document.getElementById("stop");
const resetbutton = document.getElementById("reset");


let box = document.getElementById("box");
let timerId;
let seconds = 0, minutes = 0, hours = 0;


startbutton.addEventListener('click', () => {
    clearInterval(timerId); 
    timerId = setInterval(updateTimer, 1000); }
);

stopbutton.addEventListener('click', () => {
    clearInterval(timerId); }
);

resetbutton.addEventListener('click', () => {
    clearInterval(timerId); 
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay(); }
);

function updateTimer() {
    seconds++;
    if (seconds === 60) { 
        seconds = 0; 
        minutes++; 
        if (minutes === 60) { 
            minutes = 0; 
            hours++; }
    }
    updateDisplay(); 
}

function updateDisplay() {
    box.textContent = formatTime(hours, minutes, seconds); 
}

function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}