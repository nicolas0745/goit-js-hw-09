const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
stopButton.disabled = true;
console.log('hola');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const startColorChange = () => {
  stopButton.disabled = false;
  startButton.disabled = true;
  body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopColorChange = () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearTimeout(timerId);
};

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
