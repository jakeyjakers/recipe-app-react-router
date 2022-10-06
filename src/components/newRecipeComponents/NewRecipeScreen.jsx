import React, { useState } from "react";
import { Formik } from "formik";
import './NewRecipe.css'
import axios from "axios";
import { DEVMOUNTAIN_API } from "../../Config";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  
  

  const onSubmit = (values) => {
    
    values.ingredients = ingredients;
    console.log(values);
    axios
      .post(`${DEVMOUNTAIN_API}`, values)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const ingredietDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.name} {ing.quantity}
      </li>
    )
  })

  return (
    <section className="form-parent">
    <section className="form-container">
      <h1>Tell us about your Recipe!</h1>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {
          ({ values, handleChange, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit} className='form'>

                <section>
                <label htmlFor="recipeName" className="form-container__label"></label>
                <input
                className="form-input"
                  type="text"
                  placeholder="Recipe Name"
                  id="recipeName"
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                />

                <label htmlFor="imageURL" className="form-container__label"></label>
                <input
                className="form-input"
                  type="url"
                  placeholder="URL for recipe photo"
                  id="imageURL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                />
                </section>

                <section className="form-radios">
               
                <label htmlFor="bake">Bake</label >
                <input type="radio" id="bake" name="type" onChange={handleChange} value='bake'/>
                <label htmlFor="cook">Cook</label>
                <input type="radio" id="cook" name="type" onChange={handleChange} value='cook'/>
                <label htmlFor="drink">Drink</label>
                <input
                  type="radio"
                  id="drink"
                  name="type"
                  onChange={handleChange} value='drink'
                />
                </section>

                <section className="form-section-three">
                <label htmlFor="prepTime" className="form-container__label"></label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Prep Time"
                  id="prepTime"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                />

                <label htmlFor="cookTime" className="form-container__label"></label>
                <input
                className="form-input"
                  type="text"
                  placeholder="Cook Time"
                  id="cookTime"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                />

                <label htmlFor="serves" className="form-container__label"></label>
                <input
                className="form-input"
                  type="text"
                  placeholder="serves"
                  id="serves"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                />
                </section>

                <section className="form-ing-display">

                <div>
                <label htmlFor="ingredients" className="form-container__ingredients"></label>
                <input
                className="form-input"
                  type="text"
                  placeholder="indgredients"
                  id="ingredients"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  name="ingredients"
                />

                
                <label htmlFor="quantity" className="form-container__qauntity"></label>
                <input
                className="form-input"
                  type="number"
                  placeholder="quantity"
                  id="quantity"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  name="quantity"
                />
                </div>

                <div className="form-ing__display">
                  <ul>{ingredietDisplay}</ul>
                </div>

                </section>

                <button
                  type="button"
                  onClick={addIngredient}
                  className="ingredients-btn"
                >
                  Add Indgredints
                </button>

              

                <textarea
                className="form-txt-area"
                  placeholder="instructions"
                  rows={5}
                  value={values.instrucions}
                  onChange={handleChange}
                  name="instructions"
                ></textarea>

                <button type="submit" className="form-submit">Submit Recipe</button>
              </form>
            );
          }
        }
      </Formik>
    </section>
    </section>
  );
};

export default NewRecipeScreen;
