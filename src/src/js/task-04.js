const counter = document.querySelector('#value');
// Set default value.
counter.textContent = 0;

document.querySelector('#counter [data-action="decrement"]')
    .addEventListener("click", decrement);
document.querySelector('#counter [data-action="increment"]')
    .addEventListener("click", increment);

function decrement() {
    const counterValue = parseInt(counter.textContent);
    if (counterValue > 0) {
        counter.textContent = counterValue - 1;
    }
}
function increment() {
    const counterValue = parseInt(counter.textContent);
    counter.textContent = counterValue + 1;
}
