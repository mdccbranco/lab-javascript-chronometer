const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

const start = false;

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  [minDec.innerHTML, minUni.innerHTML] = [
    ...("" + chronometer.twoDigitsNumber(chronometer.getMinutes()))
  ];
}

function printSeconds() {
  [secDec.innerHTML, secUni.innerHTML] = [
    ...("" + chronometer.twoDigitsNumber(chronometer.getSeconds()))
  ];
}

// ==> BONUS
function printMilliseconds() {
  [milDec.innerHTML, milUni.innerHTML] = [
    ...("" + chronometer.twoDigitsNumber(chronometer.getMillis()))
  ];
}

function printSplit() {
  const time = chronometer.splitClick();
  splits.innerHTML += `<li>${time}</li>`;
}

function clearSplits() {
  chronometer.resetClick();
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    clearSplits();
    [secDec.innerHTML, secUni.innerHTML] = ["0", "0"];
    [minDec.innerHTML, minUni.innerHTML] = ["0", "0"];
    [milDec.innerHTML, milUni.innerHTML] = ["0", "0"];
  } else {
    printSplit();
  }
});
