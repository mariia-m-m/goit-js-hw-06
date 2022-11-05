function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  button: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  spanColor: document.querySelector('span.color'),
}

refs.button.addEventListener("click", onButtonChangeColor)

function onButtonChangeColor(event) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();

}