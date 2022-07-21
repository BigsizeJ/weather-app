import image from "../asset/magnify.png";
import response from "./request";

const App = (() => {
  const { getData } = response();

  let object = {};

  const btnImg = document.querySelector(".btnImg");
  btnImg.src = image;

  const button = document.querySelector(".btn");
  const regionName = new Intl.DisplayNames(["en"], { type: "region" });
  const city = document.querySelector("#city");

  button.addEventListener("click", () => {
    Get(city.value);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    Get(city.value);
  });

  const Get = (value) => {
    getData(value)
      .then((response) => {
        object = {
          city: response.name,
          country: regionName.of(response.sys.country),
          weather: response.weather[0].description,
          temp: Math.round(response.main.temp),
          feels: Math.round(response.main.feels_like),
          humidity: response.main.humidity,
          windspeed: Math.round(response.wind.speed),
        };
        console.log(response);
        addContent(object);
      })
      .catch(() => {
        console.log("City not found");
      });
  };

  const addContent = (obj) => {
    const weatherbox = document.querySelector(".weatherbox");
    weatherbox.textContent = "";

    const weatherNlocation = document.createElement("div");
    weatherNlocation.className = "weatherNlocation";

    const weatherInfo = document.createElement("div");
    weatherInfo.className = "weatherInfo";

    const right = document.createElement("div");
    right.className = "right";

    const left = document.createElement("div");
    left.className = "left";

    const weather = document.createElement("p");
    weather.className = "weather";
    weather.textContent =
      obj.weather.charAt(0).toUpperCase() + obj.weather.slice(1);

    const location = document.createElement("p");
    location.className = "location";
    location.textContent = obj.city + ", " + obj.country;

    const temperature = document.createElement("p");
    temperature.className = "temp";
    temperature.textContent = obj.temp;

    const feels = document.createElement("p");
    feels.className = "feels";
    feels.textContent = `FEELS LIKE: ${obj.feels}`;

    const wind = document.createElement("p");
    wind.className = "wind";
    wind.textContent = `WIND: ${obj.windspeed} MPH`;

    const humidity = document.createElement("p");
    humidity.className = "humidity";
    humidity.textContent = `HUMIDITY: ${obj.humidity}%`;

    weatherNlocation.appendChild(weather);
    weatherNlocation.appendChild(location);

    right.appendChild(temperature);

    left.appendChild(feels);
    left.appendChild(wind);
    left.appendChild(humidity);
    weatherInfo.appendChild(right);
    weatherInfo.appendChild(left);

    weatherbox.appendChild(weatherNlocation);
    weatherbox.appendChild(weatherInfo);
  };
})();

export default App;
