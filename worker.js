// self is the  worker

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) sum += i;

  self.postMessage({ type: 'calculate_sum', payload: sum });
}
self.onmessage = function (message) {
  if (message.data.type === 'calculate_sum') {
    calculateSum();
  }
};
