import React from 'react'
import { Link } from "react-router-dom"
import "./RecipeCard.css"

function RecipeCard(props) {
  return (
    <div className="recipe">
      <img src={props.src} alt="" />
      <h2>{props.title}</h2>
      <Link to={`recipe/${props.link}`}><button>See More</button></Link>
    </div>
  )
}

export default RecipeCard