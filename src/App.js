import { useState } from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  //create hooks to store values from fetch
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setCurrentForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    //store location values in corresponding variables
    const [latitude, longitude] = searchData.value.split(" ");

    /* fetching two API calls: 1. current weather, 2. forecast
    Promise all to fetch both of these, two fetches, store in variables*/
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather, forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
