function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxes: document.querySelector('div#boxes'),
  input: document.querySelector('input'),
  btnCreate:document.querySelector('button[data-create]'),
  btnDestroy:document.querySelector('button[data-destroy]'),
}


refs.btnCreate.addEventListener("click", getAmount);


function getAmount() {
let amount = +document.querySelector("input").value;
createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  
  refs.boxes.appendChild(fragment);
}

refs.btnDestroy.addEventListener("click", ()=>
  refs.boxes.innerHTML = "")





