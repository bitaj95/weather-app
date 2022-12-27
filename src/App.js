import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData);
    //store location values in corresponding variables
    const [latitude, longitude] = searchData.value.split(" ");
  };

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
