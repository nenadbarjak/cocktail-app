import React from 'react';
import Ingredient from './Ingredient';

const Cocktail = () => {
    return (  
        <div className="cocktail">
            <h1 className="cocktail__title heading-1">Jackhammer</h1>
            <img src="https://www.thecocktaildb.com/images/media/drink/9von5j1504388896.jpg" className="cocktail__img" alt="cocktail" />
            <p className="cocktail__instructions">Serve over ice- Warning,Deadly!</p>
            <div className="cocktail__ingredients">
                <Ingredient ingredient="Jack Daniels" measure="1 Oz" />
                <Ingredient ingredient="Amaretto" measure="1 Oz" />
                
            </div>
        </div>
    );
}
 
export default Cocktail;