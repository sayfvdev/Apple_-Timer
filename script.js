const timer = document.querySelector('.time')
const minute = document.querySelector('.minutes')
const start = document.querySelector('#startBtn')
const stop = document.querySelector('#stopBtn')

let seconds = 0o0
let minutes = 10

start.onclick = () => {
    interval = setInterval(() => {

        if (seconds <= 0) {
            seconds = 59
            minutes--
        }
        timer.innerText = --seconds
        minute.innerText = minutes
    }, 1000);
}

stop.onclick = () => {
    clearInterval(interval);
};

