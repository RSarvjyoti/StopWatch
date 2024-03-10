let second = 0;
let tens = 0;

let outputSeconds = document.getElementById("second");
let outputTens = document.getElementById("tens");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let editBtn = document.getElementById("editTime");

let Interval;

startBtn.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(starTime, 10);
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    editBtn.style.display = "none";
});

stopBtn.addEventListener("click", () => {
    clearInterval(Interval);
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
    editBtn.style.display = "inline-block";
});

editBtn.addEventListener("click", () => {
    clearInterval(Interval);
    let editedTime = prompt("Enter time in seconds (e.g., 30):", "30");
    if (editedTime !== null) {
        second = parseInt(editedTime) || 0;
        tens = 0;
        outputSeconds.innerHTML = second <= 9 ? "0" + second : second;
        outputTens.innerHTML = "00";
        stopBtn.style.display = "none";
        startBtn.style.display = "inline-block";
        editBtn.style.display = "inline-block";
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(Interval);
    tens = 0;
    second = 0;
    outputSeconds.innerHTML = "00";
    outputTens.innerHTML = "00";
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
    editBtn.style.display = "inline-block";
});

function starTime() {
    tens++;
    if (tens <= 9) {
        outputTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        outputTens.innerHTML = tens;
    }
    if (tens > 99) {
        second++;
        outputSeconds.innerHTML = second <= 9 ? "0" + second : second;
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }

    if (second > 9) {
        outputSeconds.innerHTML = second;
    }
}