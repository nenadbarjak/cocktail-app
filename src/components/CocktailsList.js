import React from 'react';
import axios from 'axios'

const CocktailsList = ({ cocktailsList, dispatchSelectedCocktail }) => {

    const handleClick = (id) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                const data = res.data.drinks[0]
                
                const ingredientsKeys = Object.keys(data).filter((key) => key.includes('strIngredient'))
                const measuresKeys = Object.keys(data).filter((key) => key.includes('strMeasure'))
                const measures = []
                measuresKeys.forEach(key => {
                    if (data[key]) {
                        measures.push(data[key])
                    } else {
                        measures.push('')
                    }
                })

                const ingredients = []
                ingredientsKeys.forEach((key, index) => {
                    if (data[key]) {
                        ingredients.push(data[key] + ', ' + measures[index]) 
                    }
                })

                const cocktail = {
                    id: data.idDrink,
                    name: data.strDrink,
                    instructions: data.strInstructions,
                    img: data.strDrinkThumb,
                    ingredients
                }
                
                dispatchSelectedCocktail({
                    type: 'SET_SELECTED_COCKTAIL',
                    cocktail
                })

                window.scrollTo(0, 0)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="list">  
        {cocktailsList && cocktailsList.length > 0 &&
            cocktailsList.map((cocktail) => {
                return (
                    <figure 
                        className="list__thumb"
                        key={cocktail.id}
                        onClick={() => handleClick(cocktail.id)}
                    >
                        <img src={cocktail.img} alt="cocktail" className="list__img" />
                        <figcaption className="list__text">{cocktail.name}</figcaption>
                    </figure>
                )
            })
        }
        </div>
    );
}
 
export default CocktailsList;