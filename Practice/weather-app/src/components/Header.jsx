import React from 'react'
import WeatherBtn from "./WeatherBtn"

function Header(props) {
  let allWeather = [
    {condition: "rain", temp:"50"},
    {condition: "windy", temp:"80"},
    {condition: "rain", temp:"65"},
    {condition: "snow", temp:"30"},
    {condition: "lightning", temp:"40"},
    {condition: "cloudy", temp:"55"},
    {condition: "rain", temp:"32"},
    {condition: "sunny", temp:"100"},
  ]
  function clickHandler2(event) {
    props.sendWeather(allWeather[event.currentTarget.value])
  }
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let currentDay = (new Date).getDay()
  let index = 0
  let buttons = []
  while (index !== 8) {
    let day = index + currentDay
    if (day > 6) {
      day -= 7
    }
    buttons.push(<WeatherBtn key={index} value={index} date = {days[day]} weather = {allWeather[index].condition} clickHandler={clickHandler2} />)
    index++
  }

  return (
    <nav>
      {buttons}
    </nav>
  )
}

export default Header