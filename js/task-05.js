const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', updateOutput);

function updateOutput(e) {
    output.textContent = e.target.value ? e.target.value : 'Anonymous';
}
