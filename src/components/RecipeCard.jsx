import React from "react";
import { useNavigate } from "react-router-dom";
import './RecipeCard.css'

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return (

        <div className="recipe-card" >
            <img src={recipe.image_url} className='recipe-card__img' />
            <h2 className="recipe-card__title">{recipe.recipe_name}</h2>
            <button className="recipe-card__details" onClick={handleClick}>See Details</button>
        </div>
    )
}

export default RecipeCard