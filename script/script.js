// Functon triggers a slider that shows additional weather details
document.getElementById("slide-btn").addEventListener("click", () => {
  const displayer = document.querySelector(".main-content");
  const spin = document.querySelector(".fa-chevron-down");
  const btnSwap = document.getElementById("more");
  btnSwap.innerHTML === "MORE"
    ? (btnSwap.innerHTML = "LESS")
    : (btnSwap.innerHTML = "MORE");
  displayer.classList.toggle("active");
  spin.classList.toggle("active");
});

document.getElementById("quote-refresh").addEventListener("click", displayQuote);

function displayQuote() {
  let quoteContent = document.getElementById('quote');
  let quoteAuthor = document.getElementById('author');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteContent.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.author;
};

let quotes = [
  {
    quote: "Time flies like an arrow; fruit flies like a banana.",
    author: "Anthony G. Oettinger",
  },
  {
    quote:
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    author: "Mahatma Gandhi ",
  },
  {
    quote:
      "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Neil Gaiman",
  },
  {
    quote:
      "You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.",
    author: "Patrick Ness",
  },
  {
    quote:
      "I'm not a great programmer; I'm just a good programmer with great habits",
    author: "Kent Beck",
  },
  {
    quote:
      "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
    author: "Ada Lovelace",
  },
];

// Fetch current time to display
function getTime() {
  let time = new Date();
  let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  let minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let am_pm = time.getHours() >= 12 ? "PM" : "AM";
  if (hours === 0) {
    hours = 12;
  }
  document.getElementById("time").textContent = `${hours}:${minutes}`;
  document.getElementById("am-pm").textContent = am_pm;
};

function toggleNight() {
  let nightBackground = document.querySelector(".blur-bg");
  nightBackground.classList.toggle("night");
  let nightFont = document.querySelectorAll(".night-tog");
  nightFont.forEach(nightFont => {
    nightFont.classList.toggle("active");
  });
};

// Background change on time of day
function backgroundGreet() {
  let greeting = document.getElementById("greet");
  let today = new Date();
  hour = today.getHours();

  if (hour >= 5 && hour < 12) {
    // Morning
    greeting.textContent = "GOOD MORNING, IT'S CURRENTLY";
    document.body.style.background =
      "url(./imgs/morning.jpg) no-repeat center / cover";
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    greeting.textContent = "GOOD AFTERNOON, IT'S CURRENTLY";
    document.body.style.background =
      "url(./imgs/day.jpg) no-repeat center / cover";
  } else {
    // Evening
    greeting.textContent = "GOOD EVENING, IT'S CURRENTLY";
    document.body.style.background =
      "url(./imgs/night.jpg) no-repeat center / cover";
      toggleNight();
  }
};

// Calculate current day of the week, and week of the year
function dateInfo() {
  Date.prototype.getWeek = function () {
    let janFirst = new Date(this.getFullYear(), 0, 1);
    return Math.floor(
      ((this - janFirst) / 86400000 + janFirst.getDay() + 1) / 7
    );
  };
  let day = new Date();
  let currentWeek = day.getWeek();
  document.getElementById("current-week").textContent = currentWeek;
  document.getElementById("week-day").innerHTML = day.getDay() + 1;
  document.getElementById("day-of-year").innerHTML = Math.ceil(
    (day - new Date(day.getFullYear(), 0, 1)) / 86400000
  );
};

setInterval(getTime, 1000);
displayQuote();
backgroundGreet();
dateInfo();