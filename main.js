import "./style.css";

const timerCount = document.getElementById("timerCount");
const inputText = document.getElementById("inputText");
const wrongInputText = document.getElementById("wrongInputText");
const text = document.getElementById("text");
const button = document.getElementById("button");
const buttonOf = document.getElementById("buttonOf");

let count = 0;
let isGameStarted = false;
let timer;

function time() {
  count += 1;
  timerCount.innerText = `текущее время ${count} сек`;
}

button.addEventListener("click", function () {
  if (isGameStarted === false) {
    inputText.disabled = false;
    button.innerText = "Restart";
    isGameStarted = true;
    timer = setInterval(time, 1000);
    inputText.focus();
  } else {
    count = 0;
    inputText.value = "";
  }
});

let prevInputText = "";

inputText.addEventListener("input", function (event) {
  if (event.target.value === text.innerText) {
    inputText.disabled = true;
    alert(`Ты написал за ${count} сек`);
    clearInterval(timer);
    return;
  }
  if (text.innerText.startsWith(event.target.value)) {
    wrongInputText.innerText = "";
    prevInputText = event.target.value;
  } else {
    wrongInputText.innerText = "Неправильно!";
    event.target.value = prevInputText;
  }
});
