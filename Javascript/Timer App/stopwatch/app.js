const stopwatch = document.querySelector("#hours");

let totalseconds = 0;
let timerInterval = null;
let hasStarted = false;
let isPaused = false;

function formatTime(seconds) {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}

function timezero() {
    if (totalseconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("Time Over!");
        stopwatch.innerText = "00:00";
        hasStarted = false;
        return;
    }

    stopwatch.innerText = formatTime(totalseconds);
    totalseconds--;
}

function startTimer() {
    if (hasStarted || isPaused) return;

    const srttime = prompt("Enter timer duration (minutes):");
    if (!srttime || isNaN(srttime) || srttime < 0) {
        alert("Invalid input.");
        return;
    }

    totalseconds = parseInt(srttime) * 60;
    stopwatch.innerText = formatTime(totalseconds);

    timerInterval = setInterval(timezero, 1000);
    hasStarted = true;
    isPaused = false;
}

function pauseTimer() {
    if (!hasStarted || isPaused) return;
    clearInterval(timerInterval);
    isPaused = true;
    hasStarted = false;
}

function resumeTimer() {
    if (!isPaused) return;
    timerInterval = setInterval(timezero, 1000);
    hasStarted = true;
    isPaused = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    totalseconds = 0;
    stopwatch.innerText = "00:00";
    hasStarted = false;
    isPaused = false;
}
