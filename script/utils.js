const apiKey = "f06901ddfa0b553c54b46766f018b3b4";

function getPos(pos) {
  let cords = pos.coords;
  const lat = cords.latitude;
  const lon = cords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      let city = data.name.toUpperCase();
      let country = data.sys.country;

      document.getElementById("location").innerHTML = `IN ${city}, ${country}`;
      document.getElementById(
        "current-tz"
      ).innerHTML = Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone.replace("_", " ");
    });
}

navigator.geolocation.getCurrentPosition(getPos);
