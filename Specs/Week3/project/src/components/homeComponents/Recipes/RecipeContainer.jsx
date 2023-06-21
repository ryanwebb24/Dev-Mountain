import React from "react"
import RecipeCard from "./RecipeCard"
import "./RecipeContainer.css"

function RecipeContainer(props) {
  const testData = props.data
    .filter((recipe) => recipe.type !== "" && recipe.recipe_id !== 0)
    .filter((recipe) =>
      recipe.recipe_name.toLowerCase().includes(props.search.toLowerCase())
    )
    .map((recipe) => (
      <RecipeCard
        key={recipe.recipe_id}
        src={recipe.image_url}
        link={recipe.recipe_id}
        title={recipe.recipe_name}
      />
    ))
  return <section className="recipe-container">{testData}</section>
}

export default RecipeContainer
