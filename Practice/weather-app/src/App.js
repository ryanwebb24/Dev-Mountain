import { useState } from "react";
import './App.css';
import Header from "./components/Header";
import CurrentWeatherContainer from "./components/CurrentWeather/CurrentWeatherContainer";

function App() {
  const [weather, setWeather] = useState({condition:"sunny", temp:"90"})
  
  return (
    <div className="App">
      <Header sendWeather={setWeather}/>
      <img src="./images/Bliss.jpg" alt="bliss" className="image"/>
      <CurrentWeatherContainer weather={weather.condition} temp={weather.temp}/>
    </div>
  );
}

export default App;
