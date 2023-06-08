import React from 'react'
import weatherIcons from "../weatherIcons"
import "./WeatherBtn.css"


function WeatherBtn(props) {
  let Weather = weatherIcons[props.weather]
  return (
    <button className="weather-btn">
      <p>{props.date}</p>
      <Weather className="weather-icon"/>
    </button>
  )
}

export default WeatherBtn