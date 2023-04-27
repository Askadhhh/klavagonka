import "./style.css";

const inputText = document.getElementById("inputText");
const wrongInputText = document.getElementById("wrongInputText");
const text = document.getElementById("text");

inputText.addEventListener("input", function (event) {
  if (text.innerText.startsWith(event.target.value)) {
    wrongInputText.innerText = "";
  } else {
    wrongInputText.innerText = "Неправильно!";
  }
});
