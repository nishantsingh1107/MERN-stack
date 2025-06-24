let stopwatch = document.querySelector("#hours");

let srttime = prompt("Write the timer duration: ");
let totalseconds = srttime * 60;
stopwatch.innerText = `${srttime.toString().padStart(2,"0")}:00`

function timezero() {
    let min = Math.floor(totalseconds / 60);
    let secondsleft = Math.floor(totalseconds % 60);

    stopwatch.innerText = `${min.toString().padStart(2, "0")}:${secondsleft.toString().padStart(2, "0")}`;

    totalseconds--;

    if (totalseconds === -1) {
        clearInterval(window.funcall);
        alert("Time Over!");
    }
    console.log(totalseconds);
};

// var funcall = setInterval(timezero, 1000);

let cnt = 0;

function resetTimer() {
    clearInterval(funcall);
    stopwatch.innerText = "00:00";
}

function startTimer() {
    if (cnt == 0) {
        window.funcall = setInterval(timezero, 100);
        cnt++;
    }
}

