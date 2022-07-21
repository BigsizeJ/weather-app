const request = () => {
  const API = "3c1594e5a3c9d0f872947dfa33484fd5";
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const getData = async (city) => {
    try {
      const response = await fetch(
        `${URL}?q=${city}&APPID=${API}&units=metric`,
        { mode: "cors" }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return Promise.reject("City not found!");
    }
  };

  return { getData };
};

export default request;
