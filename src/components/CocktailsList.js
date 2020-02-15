import React from 'react';

const CocktailsList = ({ cocktailsList }) => {
    return (
        <div className="list">  
        {cocktailsList && cocktailsList.length > 0 &&
            cocktailsList.map((cocktail) => {
                return (
                    <figure className="list__thumb">
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