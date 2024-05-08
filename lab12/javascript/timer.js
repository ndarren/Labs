setInterval(timer, 3000);
let n = 0;
function timer() {
    n++;
    document.getElementById("timerDisplay").innerHTML = "My Counter Value: " + n;
}