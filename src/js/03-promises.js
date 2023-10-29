import { Notify } from 'notiflix';
const submit = document.querySelector('button[type=submit]');
const inputDelay = document.querySelector('input[name=delay]');
const inputStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function startToCreatePromises(e) {
  e.preventDefault();
  const firstDelay = parseInt(inputDelay.value) || 0;
  const step = parseInt(inputStep.value) || 0;
  const amount = parseInt(inputAmount.value) || 0;
  let delay = firstDelay;
  for (let i = 1; i <= amount; i++) {
    if (i > 1) delay += step;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

submit.addEventListener('click', startToCreatePromises);
