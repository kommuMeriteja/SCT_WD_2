let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = h + ":" + m + ":" + s;
}

document.getElementById("start").addEventListener("click", function () {

    if (!running) {

        running = true;

        timer = setInterval(function () {

            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();

        }, 1000);
    }

});

document.getElementById("pause").addEventListener("click", function () {

    clearInterval(timer);
    running = false;

});

document.getElementById("reset").addEventListener("click", function () {

    clearInterval(timer);

    running = false;

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();

    laps.innerHTML = "";

});

document.getElementById("lap").addEventListener("click", function () {

    if (running) {

        let li = document.createElement("li");

        li.innerText = display.innerText;

        laps.appendChild(li);

    }

});