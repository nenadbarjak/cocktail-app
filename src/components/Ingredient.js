import React from 'react';

const Ingredient = ({ ingredient, measure }) => {
    const encodedIngr = encodeURI(ingredient)

    return (  
        <figure className="ingredient">
            <img src={`https://www.thecocktaildb.com/images/ingredients/${encodedIngr}-Small.png`} alt="ingredient" />
            <figcaption className="ingredient__text">{measure} {ingredient}</figcaption>
        </figure>
    );
}
 
export default Ingredient;