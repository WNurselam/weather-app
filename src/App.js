import "./App.css";
import Dropdown from "./components/Dropdown";
import WeatherMenu from "./components/WeatherMenu";
import WeatherProvider from "./components/context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Dropdown />
        <WeatherMenu />
      </WeatherProvider>
    </div>
  );
}

export default App;
