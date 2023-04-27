import "./style.css";

const inputText = document.getElementById("inputText");
const wrongInputText = document.getElementById("wrongInputText");
const text = document.getElementById("text");
const button = document.getElementById("button");
const buttonOf = document.getElementById("buttonOf");

button.addEventListener("click", function () {
  if (inputText.disabled === true) {
    inputText.disabled = false;
    button.innerText =
      "Нажми повторно что бы стереть введеный тобой текст и начать заного";
  } else {
    button.innerText = "Начать заного";
    inputText.value = "";
  }

  if (
    button.innerText == "Начать заного" ||
    button.innerText ==
      "Нажми повторно что бы стереть введеный тобой текст и начать заного"
  ) {
    buttonOf.hidden = false;
    inputText.value = "";
    inputText.focus();
  }
});

let prevInputText = "";

inputText.addEventListener("input", function (event) {
  if (event.target.value === text.innerText) {
    inputText.disabled = true;
    alert("Ты победил!Выберай орду!");
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
