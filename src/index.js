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
  buttonStart: document.querySelector('button [data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

refs.buttonStart.addEventListener('click', startButton);
refs.buttonStop.addEventListener('click', stopButton);

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startButton() {
  intervalId = setInterval(changeColor, 1000);
}

function changeColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function stopButton() {
  clearInterval(intervalId);
}
