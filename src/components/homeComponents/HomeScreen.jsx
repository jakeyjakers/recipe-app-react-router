import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../RecipeCard'
import icon from '../../assets/icon.png'
import './HomeScreen.css'
import { DEVMOUNTAIN_API } from '../../Config'

const HomeScreen = () => {  
  
  const [recipes, SetRecipes] = useState([])

  const [search, setSearch] = useState('')

    const getRecipes = () => {
      axios
        .get(`${DEVMOUNTAIN_API}`)
        .then((res) => {
          SetRecipes(res.data)
          console.log(res.data)
          
        })
        .catch((error) => {
          console.log(error)
        })
    }

    useEffect(() => {
      getRecipes()
    }, [])

    const recipeFilter = recipes.filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    }).map((recipe, index) => {
      return <RecipeCard recipe={recipe}  key={recipe.recipe_id}/>
    })


  return (
    <div className='home-screen'>
      <AdBanner />
      <span className='search-container'>
      <img src={icon}  color="#DA7635" alt='a search icon'/>
        <input 
          type='text'
          value={search}
          onChange={((event) => setSearch(event.target.value))}
          placeholder='find a recipe'
        />
      </span>
      <div className='home-screen__display'>
     {recipeFilter}
     </div>
    </div>
  )
}

export default HomeScreen