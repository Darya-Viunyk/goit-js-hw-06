function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let renderedHtml = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + boxesAmount * 10;
    const item = document.createElement('div');
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.backgroundColor = getRandomHexColor();
    renderedHtml += item.outerHTML;
    boxesAmount++;
  }
  boxes.insertAdjacentHTML('beforeend', renderedHtml);
}

function destroyBoxes () {
  boxes.textContent = '';
  boxesAmount = 0;
}

let boxesAmount = 0;
const boxes = document.querySelector('#boxes');
// Add boxes.
document.querySelector('#controls [data-create=""]').addEventListener('click', function () {
  const value = document.querySelector('#controls input').value;
  if (value) {
    createBoxes(parseInt(value));
  }
});
// Clear boxes.
document.querySelector('#controls [data-destroy=""]').addEventListener('click', destroyBoxes);