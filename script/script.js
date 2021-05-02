// Functon triggers a slider that shows additional weather details
document.getElementById('slide-btn').addEventListener('click', () => {
  const displayer = document.querySelector('.main-content');
  const spin = document.querySelector('.fa-chevron-down');
  const btnSwap = document.getElementById('more');

  btnSwap.innerHTML === "MORE" ? btnSwap.innerHTML = "LESS" : btnSwap.innerHTML = "MORE" 
  displayer.classList.toggle('active');
  spin.classList.toggle('active');
});


// Fetch current time to display
function getTime() {
  let time = new Date();
  let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  let am_pm = time.getHours() >= 12 ? "PM" : "AM"
  
  if (hours === 0) {
    hours = 12;
  }

  document.getElementById('time').innerHTML = `${hours}:${minutes}`;
}

// Background change on time of day
function backgroundGreet() {
  let greeting = document.getElementById('greet');
  let today = new Date();
  hour = today.getHours();

  if (hour >= 5 && hour < 12) {
    // Morning
    greeting.textContent = "GOOD MORNING, IT'S CURRENTLY"
    document.body.style.background = "url(./imgs/morning.jpg) no-repeat center / cover"
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    greeting.textContent = "GOOD AFTERNOON, IT'S CURRENTLY"
    document.body.style.background = "url(./imgs/day.jpg) no-repeat center / cover"
  } else {
    // Evening
    greeting.textContent = "GOOD EVENING, IT'S CURRENTLY"
    document.body.style.background = "url(./imgs/night.jpg) no-repeat center / cover"
  }
}

function dayInfo() {
  let day = new Date();

  document.getElementById('week-day').innerHTML = day.getDay() + 1;

  document.getElementById('day-of-year').innerHTML = (Math.ceil((day - new Date(day.getFullYear(), 0, 1)) / 86400000));
}

setInterval(getTime, 1000);
backgroundGreet();
dayInfo();

