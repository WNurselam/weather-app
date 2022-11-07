import "./App.scss";
import Dropdown from "./components/Dropdown";
import Today from "./components/Today/Today";
import WeatherMenu from "./components/WeatherMenu";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Dropdown />
        <Today />
        <WeatherMenu />
      </WeatherProvider>
    </div>
  );
}

export default App;
