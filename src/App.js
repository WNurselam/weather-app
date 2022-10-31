import "./App.css";
import Dropdown from "./components/Dropdown";
import WeatherMenu from "./components/WeatherMenu";
import WeatherProvider from "./context/WeatherContext";
import Day from './components/Day'


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Dropdown />
        <Day/>
        <WeatherMenu />    
      </WeatherProvider>
    </div>
  );
}

export default App;
