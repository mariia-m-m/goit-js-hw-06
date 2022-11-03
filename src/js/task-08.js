const form = document.querySelector('form.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
        const formData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(formData)
    if (formElements.email.value.length === 0 || formElements.password.value.length===0) {
        alert(`Error!Есть незаполненные поля!`);
    }
    form.reset()
}


