let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendMinutes = document.getElementById("minutes");
const appendSeconds = document.getElementById("seconds");
const appendTens = document.getElementById("tenMillis");
const buttonStart = document.getElementById("bt_start");
const buttonStop = document.getElementById("bt_stop");
const buttonReset = document.getElementById("bt_reset");
let intervalId;

buttonStart.onclick = function() {
    clearInterval(intervalId) 
    intervalId = setInterval(operlateTimer, 10) //operlateTimer 함수를 호출해 10ms 간격으로 작업 수행
}

buttonStop.onclick = function() {
   clearInterval(intervalId) 
}

buttonReset.onclick = function() {
    clearInterval(intervalId) 
    tenMillis = 0; seconds = 0; minutes = 0;
    appendTens.textContent = "00"
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
}

function operlateTimer() { //10ms마다 시간에 대한 숫자 증가
    tenMillis++; //밀리초 증가시킴
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis  //밀리초 증가된 걸 표시시킴, tenMillis가 9보다 크다면 앞에 0을 붙여 표시함

    if (tenMillis > 99) { //tenMillis가 100개 있으면 1000이므로 1초
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
        tenMillis = 0
        appendTens.textContent = "00" //밀리초는 00 표시
    }

    if (seconds > 59) { //seconds가 60이면 60초 = 1분
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
        seconds = 0
        appendSeconds.textContent = "00"

    }
}
