import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData);
    //store location values in corresponding variables
    const [latitude, longitude] = searchData.value.split(" ");

    /*   fetching two API calls.
    1. current weather
    2. forecast
    Promise all to fetch both of these.
    Two fetches, store in variables
    */

    const currentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
    );
  };

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
