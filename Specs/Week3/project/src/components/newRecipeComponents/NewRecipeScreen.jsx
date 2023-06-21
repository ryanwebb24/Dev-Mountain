import React, { useState, useEffect } from "react"
import { Formik } from "formik"
import axios from "axios"
import "./NewRecipeScreen.css"

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  }
  const onSubmit = (values) => {
    values.ingredients = ingredients
    axios
      .post("https://recipes.devmountain.com/recipes", values)
      .then((res) => console.log("it worked"))
      .catch((err) => console.log(err))
  }

  const addIngredient = () => {
    setIngredients((prevValue) => [...prevValue, { name, quantity }])
    setName("")
    setQuantity("")
  }
  return (
    <section className="recipe-screen">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="name-image">
              <input
                type="text"
                placeholder="Recipe Name"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            <div className="type-radio">
              <div>
                <input
                  type="radio"
                  id="cook"
                  value="cook"
                  onChange={handleChange}
                  name="type"
                />
                <label htmlFor="cook">Cook</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bake"
                  value="bake"
                  onChange={handleChange}
                  name="type"
                />
                <label htmlFor="bake">Bake</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="drink"
                  value="drink"
                  onChange={handleChange}
                  name="type"
                />
                <label htmlFor="drink">Drink</label>
              </div>
            </div>
            <div className="serve-time">
              <input
                type="text"
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                type="text"
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                type="text"
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            <div className="ingredients">
              <div className="ingredients-text">
                <input
                  type="text"
                  placeholder="Ingredients"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="ingredients-container">
                {ingredients.map((ing) => (
                  <p>
                    {ing.quantity} {ing.name}
                  </p>
                ))}
              </div>
            </div>
            <button type="button" onClick={addIngredient} className="add-btn">
              Add Another
            </button>
            <div className="text-area">
              <textarea
                placeholder="Instructions"
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Save
            </button>
          </form>
        )}
      </Formik>
    </section>
  )
}

export default NewRecipeScreen
