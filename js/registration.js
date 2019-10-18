const form = document.getElementById('form');
const submitButton = document.getElementById('buttonSubmit');
const passwordField = document.getElementById('passwordField');
const eyeIconForPassword = document.getElementById('eyeForPassword');

form.addEventListener('click', function (event) {
    //disable submit button
    if (event.target.className === "terms-of-use") {
        event.target.checked ? submitButton.disabled = false : submitButton.disabled = true;
    }

    //show error if focus is removed
    if (event.target.tagName === 'INPUT') {
        const input = event.target;
        const label = event.target.previousElementSibling;

        input.onblur = function () {
            if (!this.value.length) {
                this.classList.add('error', 'error-placeholder');
                label.classList.add('error');
            }
        };

        input.onfocus = function () {
            if (this.classList.contains('error')) {
                this.classList.remove('error', 'error-placeholder');
                label.classList.remove('error');
            }
        };


    }
}, false)

function validateEmail() {
    const emailField = document.getElementById('emailField');
    const spanError = document.getElementById('emailError');
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!reg.test(emailField.value) && emailField.value.length !== 0) {
        spanError.classList.add('opened');
    } else {
        spanError.classList.remove('opened');
    }

}

function validatePassword() {
    const passwordField = document.getElementById('passwordField');
    const spanError = document.getElementById('passwordError');

    passwordField.value.length < 8 && passwordField.value.length !== 0 ? spanError.classList.add('opened') : spanError.classList.remove('opened');
}

function showPassword() {
    eyeIconForPassword.classList.toggle('eye-for-password-active');
    passwordField.type === 'password' ? passwordField.type = 'text' : passwordField.type = 'password';
}

function submit() {
    const arrLabels = document.querySelectorAll('form-block:first-child');
    const stopSubmit = arrLabels.includes()
    console.log('sd')
}