
const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    // Stop the page reload.
    e.preventDefault();

    let result = {};
    const elements  = e.target.elements;
    for (let i = 0; i < elements.length; i++) {
        // Check only input fields.
        if (elements[i].nodeName !== 'INPUT') {
            continue;
        }
        // Validate field.
        if (!elements[i].value) {
            alert(`The field ${elements[i].name} is required one, please setup it please.`);
            return;
        }
        // Collect data.
        result[elements[i].name] = elements[i].value;
    }
    // Print result.
    console.log(result);
    // Reset form.
    e.target.reset();
}
