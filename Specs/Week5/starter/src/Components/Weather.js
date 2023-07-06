import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"

const Weather = () => {
  const [weather, setWeather] = useState()
  const display = useSelector(selectDisplay)
  let latitude = display.capitalInfo.latlng[0]
  let longitude = display.capitalInfo.latlng[1]
  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a019db4a40024743b67185934230607&q=${latitude},${longitude}&aqi=no`)
    .then(res => {
      setWeather(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[latitude, longitude])
  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Local Time: </td>
          <td>{weather?.location?.localtime.split(" ")[1]}</td>
        </tr>
        <tr>
          <td>Conditions: </td>
          <td>{weather?.current?.condition?.text}</td>
          <td><img src={weather?.current?.condition?.icon} alt="" /></td>
        </tr>
        <tr>
          <td>Temperature: </td>
          <td>{weather?.current.temp_f} Fahrenheit</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          <td>{weather?.current?.feelslike_f} FahrenGeit</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          <td>{weather?.current?.humidity}%</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          <td>{weather?.current?.wind_mph} mph</td>
        </tr>
      </table>
    </div>
  )
}

export default Weather
