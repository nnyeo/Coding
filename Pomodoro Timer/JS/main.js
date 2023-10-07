const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval

function startTimer(){
  interval = setInterval(() => {
    console.log("timer")
  }, 1000);
}

function stopTimer(){
  console.log("stop");
}

function resetTimer(){
  console.log("reset");
}



startEl.addEventListener("click", startTimer)

stopEl.addEventListener("click", stopTimer)

resetEl.addEventListener("click", resetTimer)
