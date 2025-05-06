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

// Отправка формы Google Forms без перехода
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSe8fSriG5phpRuW_cv9EmIN1YEedNqVLC_oMZuOrZY5KkFHsQ/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: data
    }).then(() => {
      form.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    });
  });
} 