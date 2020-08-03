import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;

refs.buttonStart.addEventListener('click', changeColor);
refs.buttonStop.addEventListener('click', stopColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  refs.buttonStart.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    const backgroundColorBody =
      colors[randomIntegerFromInterval(0, colors.length)];
    refs.body.style.backgroundColor = backgroundColorBody;
  }, 1000);
}

function stopColor() {
  refs.buttonStart.removeAttribute('disabled');
  clearInterval(intervalId);
}
