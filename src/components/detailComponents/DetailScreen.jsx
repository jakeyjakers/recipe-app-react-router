import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './DetailScreen.css'
import { DEVMOUNTAIN_API } from "../../Config";

const DetailScreen = () => {
  const {id} = useParams()

  const [recipe, SetRecipe] = useState({})

  useEffect(() => {
    axios
      .get(`${DEVMOUNTAIN_API}/${id}`)
      .then((response) => {
        console.log(`this is detail screen`)
        console.log(response.data)
        SetRecipe(response.data)
      })
      .catch(error => console.log(error))
  }, [id])

  return (
    <section className="recipe-dtl">
      <div className="recipe-dtl__recipe">
        <h2>{recipe.recipe_name}</h2>
        <p>Prep Time: {recipe.prep_time}</p>
        <p>Cook Time:{recipe.cook_time}</p>
        <p>Serves: {recipe.serves}</p>
        <h2>Ingredients</h2>
        {recipe.ingredients && recipe.ingredients.map((ing, index) => {
          return (
            <h4>{ing.quantity} {ing.ingredient}</h4>
          )
        })}
      </div>
      <div className="recipe-dtl__ints">
        <h2>Instructions</h2>
        <p style={{whiteSpace: 'pre-wrap'}}>
          {console.log(recipe.instructions)}
         {recipe.instructions && (recipe.instructions)}
        </p>
      </div>
    </section>
  );
};

export default DetailScreen;
