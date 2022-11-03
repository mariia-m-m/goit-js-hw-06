function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBox: document.querySelector('div#boxes'),
  input: document.querySelector('input'),
  btnCreate:document.querySelector('button[data-create]'),
  btnDestroy:document.querySelector('button[data-dectroy]'),
}


refs.btnCreate.addEventListener('click', onBtnCreateClick)
function onBtnCreateClick() {
  
  const element = document.createElement('div');
  
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = '30px';
    element.style.height = '30px';
  refs.divBox.append(element);
  
}