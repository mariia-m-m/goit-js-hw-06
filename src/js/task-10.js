function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBox: document.querySelector('div#boxes'),
  input: document.querySelector('input'),
  btnCreate:document.querySelector('button[data-create]'),
  btnDestroy:document.querySelector('button[data-dectroy]'),
}

let dataInput = Number(refs.input.value);
refs.btnCreate.addEventListener('click', onBtnCreateClick)
function onBtnCreateClick() {
refs.divBox.innerHTML='<; style="height:30px; width:30px;" class="item"'.repeat(dataInput);
const item = document.querySelector('.item');
item.style.backgroundColor = getRandomHexColor();

}
refs.btnDestroy.addEventListener('click', onBtnDestroyClick)
function onBtnCreateClick() {
refs.divBox.textContent='';
}
