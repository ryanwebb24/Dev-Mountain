import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./DetailScreen.css"
import { VscLoading } from "react-icons/vsc"

const DetailScreen = () => {  
  const {id} = useParams()
  const [recipe, setRecipe] = useState([])
  let data = null
  const getData = async () =>{
    await axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(()=>{
    getData()
  },[])
  if (recipe.length !== 0) {
    data = 
      <section className="details-page">
        <div className="title-content">
          <h2 className="title">{recipe.recipe_name}</h2>
          <img src={recipe.image_url} alt="No Image" className="food-img"/>
        </div>
        <div className="full-recipe">
          <div className="recipe-details">
            <h2>Recipe</h2>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
            <h2>Ingredients</h2>
            {recipe.ingredients.map(ing => {return <p>{ing.quantity} {ing.ingredient}</p>})}
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            {recipe.instructions.replaceAll('"', '').split("\\n").map(step => <p>{step}</p>)}
          </div>
        </div>
      </section>
  }
  return (
    <div className="details">
      {data ? data : <VscLoading className="loading"/> }
    </div>
  );
};

export default DetailScreen;
