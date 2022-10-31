const refs = {
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    value: document.querySelector('span#value'),    
}
let clicks = 0;
refs.incrementBtn.addEventListener("click", function () {
    clicks += 1;
    refs.value.innerHTML =clicks;
  
}
)
refs.decrementBtn.addEventListener("click", function () {
    refs.value.innerHTML -=1;
}
)
