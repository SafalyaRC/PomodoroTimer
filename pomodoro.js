const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const timer = document.getElementById('timer');

let minutes = 25;
let seconds = 0;
let timerId;

function updateTimerDisplay() {
    timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

updateTimerDisplay(); // Initial display

start.addEventListener('click', () => {
    if (!timerId) {
        timerId = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerId);
                    return;
                }
                seconds = 59;
                minutes--;
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);
    }
});

stop.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null; // Reset timerId when stopped
});

reset.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null; // Reset timerId when reset
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
});
