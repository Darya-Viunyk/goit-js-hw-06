const input = document.querySelector('#validation-input');
input.addEventListener('blur', validate);

function validate(e) {
    // Clear style.
    if (!e.target.value) {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    }
    // Mark as valid.
    else if (parseInt(input.getAttribute('data-length')) === e.target.value.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    // Mark as invalid.
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}