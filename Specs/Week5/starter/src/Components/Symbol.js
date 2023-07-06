import React from 'react'
import { useSelector } from "react-redux"
import { selectDisplay } from "../redux/slices/displayCountrySlice"

function Symbol() {
  const currentDisplay = useSelector(selectDisplay)
  return (
    <div className="symbols">
      <div className="stack">
        <h2>The {currentDisplay.name.common} flag</h2>
        <img src={currentDisplay.flags.png} alt="flag" />
      </div>
      <div className="stack">
        <h2>The coat of arms</h2>
        <img src={currentDisplay.coatOfArms.png} alt="Coat of Arms" />
      </div>
    </div>
  )
}

export default Symbol