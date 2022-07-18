const request = () => {
  const API = "3c1594e5a3c9d0f872947dfa33484fd5";
  const URL = "http://api.openweathermap.org/data/2.5/weather";

  const getData = async (city) => {
    const response = await fetch(
      `${URL}?q=${city}&APPID=${API}&units=imperial`
    );
    const data = await response.json();
    return data;
  };

  return { getData };
};

export default request;
