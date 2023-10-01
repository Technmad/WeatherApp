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
  setForcastData(data);
  //   console.log(data.current.condition.text);
  getGif(data.current.condition.text);
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

function setForcastData(data) {
  document.querySelector(".sunrise h5").innerHTML =
    data.forecast.forecastday[0].astro.sunrise;
  document.querySelector(".sunset h5").innerHTML =
    data.forecast.forecastday[0].astro.sunset;
  document.querySelector(".maxtemp h5").innerHTML =
    data.forecast.forecastday[0].day.maxtemp_c + "°C";
  document.querySelector(".mintemp h5").innerHTML =
    data.forecast.forecastday[0].day.mintemp_c + "°C";
  document.querySelector(".maxwind h5").innerHTML =
    data.forecast.forecastday[0].day.maxwind_kph + "km/h";
  document.querySelector(".humidity h5").innerHTML =
    data.forecast.forecastday[0].day.avghumidity + "%";
  document.querySelector(".precipitation h5").innerHTML =
    data.forecast.forecastday[0].day.totalprecip_mm + "mm";
  document.querySelector(".uv h5").innerHTML =
    data.forecast.forecastday[0].day.uv;
}

async function getGif(value) {
  console.log(value);
  const result = await fetch(
    `https://api.giphy.com/v1/stickers/translate?api_key=U6CX6e7472i4Z2zdYsg4DWM4rd4QKfe7&s=` +
      value,
    { mode: "cors" }
  );

  response = await result.json();
  document.querySelector(".gif img").src = response.data.images.original.url;
}

searchBttn.addEventListener("click", () => {
  city = searchBar.value;
  getWeatherInfo(city);
});

getWeatherInfo(city);
