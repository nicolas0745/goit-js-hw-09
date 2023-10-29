import flatpickr from 'flatpickr';
import { Notify } from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
const inputDate = document.querySelector('input[type=text]');
const startButton = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
startButton.disabled = true;
let ms = 0;
let updateTimeId = null;
const initializeTimer = () => {
  startButton.disabled = true;
  inputDate.disabled = true;
  updateTimeId = setInterval(() => {
    const time = convertMs(ms);
    const {
      days: convertDays,
      hours: convertHours,
      minutes: convertMinutes,
      seconds: convertSeconds,
    } = time;
    days.textContent = addLeadingZero(convertDays);
    hours.textContent = addLeadingZero(convertHours);
    minutes.textContent = addLeadingZero(convertMinutes);
    seconds.textContent = addLeadingZero(convertSeconds);
    ms -= 1000;
    if (ms <= 0) {
      clearInterval(updateTimeId);
      inputDate.disabled = false;
    }
  }, 1000);
};
function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateToCompare = new Date(selectedDates).getTime();
    const actualDate = new Date().getTime();
    if (dateToCompare <= actualDate) {
      startButton.disabled = true;
      Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      });
      return;
    }
    startButton.disabled = false;
    ms = dateToCompare - actualDate;
  },
};
flatpickr(inputDate, options);
startButton.addEventListener('click', initializeTimer);
