/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const searchBar = document.querySelector(\".search input\");\nconst searchBttn = document.querySelector(\".search button\");\n\nlet city = \"london\";\nconst apiKey = \"4b2d87cf9877444cae9181326233009\";\n\nconst apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;\n\nasync function getWeatherInfo(city) {\n  const response = await fetch(apiUrl + city, { mode: \"cors\" });\n  const json = await response.json();\n  //   console.log(json.current.temp_c);\n  displayData(json);\n}\n\nfunction displayData(data) {\n  setTemperature(data);\n  setLocation(data);\n  setForcastData(data);\n  //   console.log(data.current.condition.text);\n  getGif(data.current.condition.text);\n}\n\nfunction setTemperature(data) {\n  document.querySelector(\".condition\").innerHTML = data.current.condition.text;\n  document.querySelector(\".weatherlogo img\").src =\n    \".\" + data.current.condition.icon.slice(20);\n  document.querySelector(\".temp\").innerHTML = `${Math.round(\n    data.current.temp_c\n  )}°C`;\n}\n\nfunction setLocation(data) {\n  document.querySelector(\".city\").innerHTML = data.location.name;\n  document.querySelector(\".country\").innerHTML = data.location.country;\n}\n\nfunction setForcastData(data) {\n  document.querySelector(\".sunrise h5\").innerHTML =\n    data.forecast.forecastday[0].astro.sunrise;\n  document.querySelector(\".sunset h5\").innerHTML =\n    data.forecast.forecastday[0].astro.sunset;\n  document.querySelector(\".maxtemp h5\").innerHTML =\n    data.forecast.forecastday[0].day.maxtemp_c + \"°C\";\n  document.querySelector(\".mintemp h5\").innerHTML =\n    data.forecast.forecastday[0].day.mintemp_c + \"°C\";\n  document.querySelector(\".maxwind h5\").innerHTML =\n    data.forecast.forecastday[0].day.maxwind_kph + \"km/h\";\n  document.querySelector(\".humidity h5\").innerHTML =\n    data.forecast.forecastday[0].day.avghumidity + \"%\";\n  document.querySelector(\".precipitation h5\").innerHTML =\n    data.forecast.forecastday[0].day.totalprecip_mm + \"mm\";\n  document.querySelector(\".uv h5\").innerHTML =\n    data.forecast.forecastday[0].day.uv;\n}\n\nasync function getGif(value) {\n  console.log(value);\n  const result = await fetch(\n    `https://api.giphy.com/v1/stickers/translate?api_key=U6CX6e7472i4Z2zdYsg4DWM4rd4QKfe7&s=` +\n      value,\n    { mode: \"cors\" }\n  );\n\n  response = await result.json();\n  document.querySelector(\".gif img\").src =\n    response.data.images.fixed_height.url;\n}\n\nsearchBttn.addEventListener(\"click\", () => {\n  city = searchBar.value;\n  getWeatherInfo(city);\n});\n\ngetWeatherInfo(city);\n\nconst toogleC = document.querySelector(\".settings-metric\");\nconst toogleF = document.querySelector(\".settings-imperial\");\nlet toogleOn = true;\n\ntoogleC.addEventListener(\"click\", (e) => {\n  console.log(e);\n  if (toogleOn == true) return;\n  let degreeC = document.querySelector(\".temp\").textContent.slice(0, 2);\n  degreeC = ((degreeC - 32) * 5) / 9;\n  document.querySelector(\".temp\").textContent = Math.round(degreeC) + \"°C\";\n  toogleOn = true;\n});\n\ntoogleF.addEventListener(\"click\", (e) => {\n  console.log(e);\n  if (toogleOn == false) return;\n  let degreeF = document.querySelector(\".temp\").textContent.slice(0, 2);\n  // console.log(degreeF);\n  degreeF = (degreeF * 9) / 5 + 32;\n  // console.log(degreeF);\n  document.querySelector(\".temp\").textContent = Math.round(degreeF) + \"°F\";\n  toogleOn = false;\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;