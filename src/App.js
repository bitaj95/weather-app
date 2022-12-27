import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const handleSearchChange = (searchData) => {
    //store location values in corresponding variables
    const [latitude, longitude] = searchData.value.split(" ");

    /*   fetching two API calls.
    1. current weather
    2. forecast
    Promise all to fetch both of these.
    Two fetches, store in variables
    */

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
    });
  };

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
