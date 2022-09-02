
const clockBlock = document.querySelector('.clock');
const dateBlock = document.querySelector('.date');

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

dateBlock.innerText = `${checkItem(day)} - ${checkItem(month +1) } - ${checkItem(year)}`;

function clockUpdater () {
    
    let date = new Date();
    let Hour = date.getHours();
    let Minute = date.getMinutes();
    let Second = date.getSeconds();
    clockBlock.innerText = `${checkItem(Hour)} : ${checkItem(Minute)} : ${checkItem(Second)}`;

    setTimeout(clockUpdater, 1000);
}
clockUpdater();

// setInterval( clockUpdater, 1000);

function checkItem (item) {
    return item > 10 ? item : `0${item}`;
}


// _____________________Cекундомір ____________________

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let stopwatch;

const start = document.getElementById('start');
start.addEventListener('click', () => {
    stopwatch = setInterval(() => { timer(); }, 10);
    start.disabled = true;
});

const pause = document.getElementById('pause');
pause.addEventListener('click', () => {
    clearInterval(stopwatch);
    start.disabled = false;

});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
    clearInterval(stopwatch);
    loopContainer.innerHTML = '';
    loopContainer.style.cssText = '';
    loopNum = 0

});

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.querySelector('#hour').innerText = returnData(hour);
    document.querySelector('#minute').innerText = returnData(minute);
    document.querySelector('#second').innerText = returnData(second);
    document.querySelector('#millisecond').innerText = returnData(millisecond);
}
function returnData(numbers) {
    return numbers > 10 ? numbers : `0${numbers}`;
}

let loopNum = 0;
const loopContainer = document.querySelector('.main_loops_container');

const loop = document.getElementById('loop');
loop.addEventListener('click', () => {
    let loopItem = document.querySelector('.stopwatch').innerText;
    loopNum++;
    const loopsInners = document.createElement('div');
    loopsInners.classList.add('loopsContainer');
    loopContainer.append(loopsInners);
    loopsInners.append(loopItem);
    loopsInners.prepend(`${loopNum}) `);

    loopContainer.style.cssText = ' width: 200px; overflow-y: scroll; font-size: 20px; padding: 5px; border: 1px solid green; border-radius: 5px;';
    
});

// ________________________Зворотній таймер________________________

const hoursSet = document.querySelector('.hourTT');
const minutesSet = document.querySelector('.minuteTT');
const secondsSet = document.querySelector('.secondTT');

const hoursLabel = document.querySelector('#hourTimer');
const minutesLabel = document.querySelector('#minuteTimer');
const secondsLabel = document.querySelector('#secondTimer');



function setTimer({ hours, minutes, seconds }) {
    hoursLabel.innerText = returnData(hours);
    minutesLabel.innerText = returnData(minutes);
    secondsLabel.innerText = returnData(seconds);
}

function returnData(number) {
    return number >= 10 ? number : `0${number}`;
}

const timerContainer = document.querySelector('.timer_main'); // коли сплине час змінить колір рамки на червоний

function calculateTimerSeconds(time) {
    let result = 0;
    result += time.hours * 60 * 60;
    result += time.minutes * 60;
    result += time.seconds;
    return result;
}

function formatTimerSeconds(totalSeconds) {
    const _hours = Math.floor(totalSeconds / 60 / 60);
    const _minutes = Math.floor((totalSeconds / 60) - (_hours * 60));
    const _seconds = Math.floor(totalSeconds - (_hours * 60 * 60) - (_minutes * 60));
    
    return { hours: _hours, minutes: _minutes, seconds: _seconds };
}

const startTimer = document.querySelector('.startTimer');
startTimer.addEventListener('click', () => {

    const hours = +hoursSet.value;
    const minutes = +minutesSet.value; 
    const seconds = +secondsSet.value;

    const formattedTime = {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

    let totalSeconds = calculateTimerSeconds(formattedTime);

    const interval = setInterval (() => {
        if (totalSeconds === 0) {
            clearInterval(interval);
            timerContainer.style.cssText = 'border: 4px solid red;';
        }
        const time = formatTimerSeconds(totalSeconds);
        setTimer(time);
        totalSeconds--;
    }, 1000);
    
    const stopTimer = document.querySelector('.stopTimer');
    stopTimer.addEventListener('click', () => {
        clearInterval(interval);
        // console.log(seconds);

    });
    
    const resetTimer = document.querySelector('.resetTimer');
    resetTimer.addEventListener('click', () => {
        clearInterval(interval)
        hoursSet.value = '0';
        minutesSet.value = '0';
        secondsSet.value = '0';
        document.querySelector('#hourTimer').innerText = '--';
        document.querySelector('#minuteTimer').innerText = '--';
        document.querySelector('#secondTimer').innerText = '--';
        timerContainer.style.cssText = 'border: 2px solid green;';

    });
 
});

