import React from 'react';

const Ingredient = ({ ingredient }) => {
    const ingredientName = ingredient.split(',')[0]
    const encodedIngr = encodeURI(ingredientName)

    return (  
        <figure className="ingredient">
            <img src={`https://www.thecocktaildb.com/images/ingredients/${encodedIngr}-Medium.png`} alt="ingredient" className="ingredient__img" />
            <figcaption className="ingredient__text">{ingredient}</figcaption>
        </figure>
    );
}
 
export default Ingredient;