let hr = 0;
let min = 59;
let sec = 0;
let count = 0;
let timer = false;

let smTimer = document.getElementById('smallTimer');
let hour = document.getElementById('hr');
let minute = document.getElementById('min');
let second = document.getElementById('sec');

let start = document.getElementById('startBtn');
let reset = document.getElementById('resetBtn');
let stop = document.getElementById('stopBtn');

//To stop calling timerWacth() again n again when the timerWatch() already called.
let stopWorkStart = 0;
start.addEventListener('click',function(){
    timer = true;
    if(stopWorkStart == 0){
        timerWatch();
        stopWorkStart++;
    }
});
reset.addEventListener('click',function(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    smTimer.innerHTML = "00";
    location.reload();
});
stop.addEventListener('click',function(){
    timer = false;
    stopWorkStart = 0;
});

function timerWatch(){
    if(timer){
        count++;
        smTimer.innerHTML = count;
        if(count == 100){
            sec++;
            second.innerHTML = sec;
            count = 0;
        }
        if(sec == 60){
            min++;
            second.innerHTML = "00";
            minute.innerHTML = min;
            sec = 0;
        }
        if(min == 60){
            hr++;
            minute.innerHTML = "00";
            hour.innerHTML = hr;
            min = 0;
        }
        setTimeout('timerWatch()',10);
    }
}