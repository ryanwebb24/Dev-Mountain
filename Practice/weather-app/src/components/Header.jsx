import React from 'react'
import WeatherBtn from "./WeatherBtn"

function Header() {
  function func1 (name) {
    console.log(name);
  }
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let currentDay = (new Date).getDay()
  let index = 0
  let buttons = []
  while (index !== 8) {
    let day = index++ + currentDay
    if (day > 6) {
      day -= 7
    }
    buttons.push(<WeatherBtn date = {days[day]} weather = "sunny" />)
  }

  return (
    <nav>
      {buttons}
      <button onClick={func1.bind(func1, "jo")}>Hello</button>
    </nav>
  )
}

export default Header