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
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanColor.textContent = color;

}