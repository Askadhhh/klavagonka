import "./style.css";

const inputText = document.getElementById("inputText");
const wrongInputText = document.getElementById("wrongInputText");
const text = document.getElementById("text");

let prevInputText = "";

inputText.addEventListener("input", function (event) {
  if (text.innerText.startsWith(event.target.value)) {
    wrongInputText.innerText = "";
    prevInputText = event.target.value;
  } else {
    wrongInputText.innerText = "Неправильно!";
    event.target.value = prevInputText;
  }
});
