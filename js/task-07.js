const refs = {
    input: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text')
}


refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    const valueInput = event.currentTarget.value;
    refs.text.style.fontSize = `${valueInput}px`;
}
