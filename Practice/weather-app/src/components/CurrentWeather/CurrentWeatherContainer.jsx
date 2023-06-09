
import weatherIcons from "../../weatherIcons"
import CurrentWeather from "./CurrentWeather"

function CurrentWeatherContainer(props) {
  let Weather = weatherIcons[props.weather]

  return (
    <div className="weather-container">
      <Weather/>
      <CurrentWeather condition={props.weather} temp={props.temp}/>
    </div>
  )
}

export default CurrentWeatherContainer