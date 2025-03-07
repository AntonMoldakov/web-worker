const sumButton = document.querySelector('#sumButton');
const wwSumButton = document.querySelector('#wwSumButton');
const bgButton = document.querySelector('#bgButton');

const worker = new Worker('./worker.js');

worker.onmessage = (message) => {
  if (message.data.type === 'calculate_sum') {
    alert(`The final sum is ${message.data.payload}`);
  }
};

sumButton.addEventListener('click', (event) => {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) sum += i;

  alert(`The final sum is ${sum}`);
});

wwSumButton.addEventListener('click', (event) => {
  worker.postMessage({ type: 'calculate_sum' });
});

bgButton.addEventListener('click', (event) => {
  if (document.body.style.background !== 'green')
    document.body.style.background = 'green';
  else document.body.style.background = 'blue';
});
