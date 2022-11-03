const refs = {
    input: document.querySelector('input#name-input'),
    nameLabel: document.querySelector('span#name-output')
}

refs.input.addEventListener('input', onInputChange)
    
function onInputChange(event) {
    console.log(event.currentTarget.value);

    refs.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        refs.nameLabel.textContent = 'Anonymous';
}
}
