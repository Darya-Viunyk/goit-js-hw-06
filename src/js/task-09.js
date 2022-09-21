
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector('.change-color').addEventListener('click', updateColor);
const colorOutput = document.querySelector('.color');
const body = document.querySelector('body');

function updateColor(e) {
  const newColor = getRandomHexColor();
  colorOutput.textContent = newColor;
  body.setAttribute('style', `background-color: ${newColor}`);
}
