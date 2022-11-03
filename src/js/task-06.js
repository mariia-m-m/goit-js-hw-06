const refs = {
    input: document.querySelector('input#validation-input[data-length="6"]')
}

refs.input.addEventListener('blur', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}
