import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'


const HomeScreen = () => {  
  const url = `https://recipes.devmountain.com`
  const [recipes, SetRecipes] = useState([])

    const getRecipes = () => {
      axios
        .get(`${url}/recipes`)
        .then((res) => {
          console.log(res.data)
          SetRecipes(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    useEffect(() => {
      getRecipes()
    }, [])

  return (
    <div>
      <AdBanner />
      
    </div>
  )
}

export default HomeScreen