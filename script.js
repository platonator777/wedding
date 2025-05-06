// Таймер до 5 сентября 2025 года
const deadline = new Date('2025-09-05T00:00:00');
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

function updateTimer() {
  const now = new Date();
  const diff = deadline - now;
  if (diff <= 0) {
    daysSpan.textContent = '00';
    hoursSpan.textContent = '00';
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  daysSpan.textContent = String(days).padStart(2, '0');
  hoursSpan.textContent = String(hours).padStart(2, '0');
  minutesSpan.textContent = String(minutes).padStart(2, '0');
  secondsSpan.textContent = String(seconds).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbxNcB1dv4JyD3JZUilyqmQtbm4h2IQPoSkM6SKBBDrszygSOKb3R6GJWg2kZkCO3GOL/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      document.getElementById('form-success').style.display = 'block';
      form.reset();
      console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
})
