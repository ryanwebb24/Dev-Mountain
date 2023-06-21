import React, { useEffect, useState } from "react"
import AdBanner from "./AdBanner"
import axios from "axios"
import RecipeContainer from "./Recipes/RecipeContainer"
import "./HomeScreen.css"
import  { FaSearch } from "react-icons/fa"

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  function getData() {
    axios.get("https://recipes.devmountain.com/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="home-container">
      <AdBanner />
      <div className="search">
        <button><FaSearch className="search-icon"/></button>
        <input type="text" placeholder="Search for a Recipe" value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <RecipeContainer data={recipes} search={search}/>
    </div>
  )
}

export default HomeScreen
