const input = document.querySelector('#font-size-control');
input.addEventListener('input', updateSize);
const text = document.querySelector('#text');
// Set default font size.
text.setAttribute('style', `font-size: 56px`);

function updateSize(e) {
    text.setAttribute('style', `font-size: ${e.target.value}px`);
}
