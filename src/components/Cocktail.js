import React from 'react';
import Ingredient from './Ingredient';
import icon from '../img/575631.svg'

const Cocktail = ({ cocktail, dispatchSelectedCocktail }) => {

    const src = cocktail.img ? cocktail.img : icon

    return (  
        <div className="cocktail">
            <h1 className="cocktail__title heading-1">{cocktail.name}</h1>
            <img src={src} className="cocktail__img" alt="cocktail" />
            <p className="cocktail__instructions">{cocktail.instructions}</p>
            <div className="cocktail__ingredients">
                {cocktail.ingredients &&
                    cocktail.ingredients.map((ingredient, index) => {
                        return (
                            <Ingredient ingredient={ingredient} key={index} />
                        )
                    })
                }                
            </div>
            {cocktail.img && 
                <div 
                    className="cocktail__clear" 
                    onClick={() => dispatchSelectedCocktail({})}
                >
                    Clear
                </div> }
        </div>
    );
}
 
export default Cocktail;