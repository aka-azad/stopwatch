const timeEl = document.querySelector( ".time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 00;
let interval = null;

startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)

function timer() {
  seconds++;
  let hrs = Math.floor(seconds / (60 * 60));
  let mins = Math.floor((seconds -(hrs * 3600)) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = '0' + secs
  if (mins < 10) mins = '0' + mins
  if (hrs < 10) hrs = '0' + hrs
  
  timeEl.innerText = `${hrs}:${mins}:${secs}`

}

function start() {
  if (interval) {
    return
  }
  interval = setInterval(timer, 1000)
}

function stop() {
  clearInterval(interval)
  interval = null
}

function reset () {
  stop()
  seconds = -1
  timer()
}