const apiKey = "138c9a46136b8599b9865364880d3a0d"; // 🔥 Replace this with your OpenWeatherMap API key

const getWeatherBtn = document.getElementById("get-weather");
const cityInput = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const hum = data.main.humidity;
    const wnd = data.wind.speed;
    const main = data.weather[0].main.toLowerCase();

    // Update UI
    cityName.textContent = data.name;
    temperature.textContent = `${temp}°C`;
    condition.textContent = desc;
    humidity.textContent = `${hum}%`;
    wind.textContent = `${wnd} km/h`;

    // Change background based on weather
    updateBackground(main);
  } catch (error) {
    cityName.textContent = "City not found";
    temperature.textContent = "--°C";
    condition.textContent = "—";
    humidity.textContent = "--%";
    wind.textContent = "-- km/h";
    document.body.style.background = "linear-gradient(120deg, #14142b, #1b1835, #0a0a12)";
  }
}

function updateBackground(main) {
  if (main.includes("cloud")) {
    document.body.style.background = "linear-gradient(120deg, #2c3e50, #4ca1af)";
  } else if (main.includes("rain")) {
    document.body.style.background = "linear-gradient(120deg, #373b44, #4286f4)";
  } else if (main.includes("clear")) {
    document.body.style.background = "linear-gradient(120deg, #ffb347, #ffcc33)";
  } else if (main.includes("snow")) {
    document.body.style.background = "linear-gradient(120deg, #83a4d4, #b6fbff)";
  } else {
    document.body.style.background = "linear-gradient(120deg, #14142b, #1b1835, #0a0a12)";
  }
}
