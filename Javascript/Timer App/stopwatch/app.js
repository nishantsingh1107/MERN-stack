const timeDisplay = document.querySelector("#hours");

let secondsPassed = 0;
let timer = null;
let running = false;
let paused = false;

const formatTime = (secs) => {
    const mins = String(Math.floor(secs / 60)).padStart(2, "0");
    const secsOnly = String(secs % 60).padStart(2, "0");
    return `${mins}:${secsOnly}`;
};

const updateTime = () => {
    secondsPassed++;
    timeDisplay.innerText = formatTime(secondsPassed);
};

const startStopwatch = () => {
    if (running || paused) return;
    timer = setInterval(updateTime, 1000);
    running = true;
    paused = false;
};

const pauseStopwatch = () => {
    if (!running || paused) return;
    clearInterval(timer);
    paused = true;
    running = false;
};

const resumeStopwatch = () => {
    if (!paused) return;
    timer = setInterval(updateTime, 1000);
    running = true;
    paused = false;
};

const resetStopwatch = () => {
    clearInterval(timer);
    timer = null;
    secondsPassed = 0;
    timeDisplay.innerText = "00:00";
    running = false;
    paused = false;
};
