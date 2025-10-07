const cities = {
  delhi: { temp: 30, cond: "Sunny", hum: 42, wind: 12 },
  mumbai: { temp: 28, cond: "Cloudy", hum: 70, wind: 15 },
  london: { temp: 14, cond: "Rainy", hum: 85, wind: 10 },
  newyork: { temp: 25, cond: "Clear Sky", hum: 60, wind: 8 },
  paris: { temp: 20, cond: "Foggy", hum: 75, wind: 6 },
  tokyo: { temp: 22, cond: "Windy", hum: 65, wind: 10 },
};

document.getElementById("get-weather").addEventListener("click", () => {
  const input = document.getElementById("city-input").value.trim().toLowerCase();
  const data = cities[input];

  const name = document.getElementById("city-name");
  const temp = document.getElementById("temperature");
  const cond = document.getElementById("condition");
  const hum = document.getElementById("humidity");
  const wind = document.getElementById("wind");

  if (data) {
    name.textContent = input.charAt(0).toUpperCase() + input.slice(1);
    temp.textContent = `${data.temp}°C`;
    cond.textContent = data.cond;
    hum.textContent = `${data.hum}%`;
    wind.textContent = `${data.wind} km/h`;
  } else {
    name.textContent = "City not found";
    temp.textContent = "—";
    cond.textContent = "";
    hum.textContent = "—";
    wind.textContent = "—";
  }
});
