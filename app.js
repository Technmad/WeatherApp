const searchBar = document.querySelector(".search input");
const searchBttn = document.querySelector(".search button");

let city = "london";
const apiKey = "4b2d87cf9877444cae9181326233009";

const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;

async function getWeatherInfo(city) {
  const response = await fetch(apiUrl + city, { mode: "cors" });
  const json = await response.json();
  //   console.log(json.current.temp_c);
  displayData(json);
}

function displayData(data) {
  setTemperature(data);
  setLocation(data);
}

function setTemperature(data) {
  document.querySelector(".condition").innerHTML = data.current.condition.text;
  document.querySelector("img").src = data.current.condition.icon.slice(20);
  document.querySelector(".temp").innerHTML = `${Math.round(
    data.current.temp_c
  )}°C`;
}

function setLocation(data) {
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".country").innerHTML = data.location.country;
}

searchBttn.addEventListener("click", () => {
  city = searchBar.value;
  getWeatherInfo(city);
});

getWeatherInfo(city);
