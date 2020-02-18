import React from 'react';
import axios from 'axios'

const Header = ({ dispatchSelectedCocktail }) => {
    const getRandom = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
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
            }).catch((err) => {
                console.log(err)
            })
    }

    return (  
        <nav className="header">
            <h1 className="header__heading heading-1">Cocktail Bar</h1>
            <h2 className="header__subtitle heading-2">Get a list of cocktails made from your favorite ingredient or get a totaly random cocktail</h2>
            <div 
                className="header__random"
                onClick={getRandom}
            >
                <span className="header__random--visible">Get random cocktail</span>
                <span className="header__random--invisible">Go crazy!!!</span>
            </div>
        </nav>
    );
}
 
export default Header;