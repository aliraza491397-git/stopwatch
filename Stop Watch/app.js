var seconds = 0;
var minuts = 0;
var hours = 0;

var timer;

function start(){
    timer = setInterval(function(){
        seconds++;

        if (seconds == 60){
            seconds = 0;
            minuts++;
        }
        if(minuts == 60){
            minuts = 0
            hours++;
        }
        var display = document.getElementById("display").innerHTML = seconds + ":" + minuts + ":" + hours;
    }, 1000)
}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer)
        seconds = 0;
        minuts = 0;
        hours = 0;

        var display = document.getElementById("display").innerHTML = "00:00:00"
    }

