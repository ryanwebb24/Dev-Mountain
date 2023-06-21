import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailScreen = () => {  
  const {id} = useParams()
  const [recipe, setRecipe] = useState([])
  function getData(){
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(()=>{
    getData()
  },[])
  console.log(recipe)
  return (
    <section>
      <div className="title-content">
        <h2 className="title">{recipe.recipe_name}</h2>
        <img src={recipe.image_url} alt="food" />
      </div>
      <div className="recipe">
        <h2>Recipe</h2>
        <p></p>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </section>
  );
};

export default DetailScreen;
