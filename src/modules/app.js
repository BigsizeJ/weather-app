import image from "../asset/magnify.png";
import response from "./request";

const App = (() => {
  const { getData } = response();

  let object = {};

  const btnImg = document.querySelector(".btnImg");
  btnImg.src = image;

  const button = document.querySelector(".btn");
  const regionName = new Intl.DisplayNames(["en"], { type: "region" });

  button.addEventListener("click", () => {
    getData("London").then((response) => {
      object = {
        city: response.name,
        country: regionName.of(response.sys.country),
        weather: response.weather[0].description,
        temp: response.main.temp,
        feels: response.main.feels_like,
        humidity: response.main.humidity,
        windspeed: response.wind.speed,
      };
      addContent(object);
    });
  });

  const addContent = (obj) => {
    const weatherbox = document.querySelector(".weatherbox");
    const weather = document.createElement("p");

    const location = document.createElement("label");

    const city = document.createElement("p");
    const country = document.createElement("p");
    weather.textContent = obj.weather;
    city.textContent = obj.city + ",";
    country.textContent = obj.country;

    location.appendChild(city);
    location.appendChild(country);

    weatherbox.appendChild(weather);
    weatherbox.appendChild(location);
  };
})();

export default App;
