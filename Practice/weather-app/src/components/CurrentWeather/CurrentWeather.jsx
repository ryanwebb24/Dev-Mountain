import React from 'react'

function CurrentWeather(props) {
  return (
    <div className="current-weather">
      <p>{props.temp}</p>
      <p>{props.condition}</p>
    </div>
  )
}

export default CurrentWeather