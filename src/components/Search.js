import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { ingredients } from '../ingr'
import CocktailsList from './CocktailsList';


const Search = ({ cocktailsList, dispatchCocktailsList, dispatchSelectedCocktail }) => {
    const [imgURL, setImgURL] = useState()

    const ingr = ingredients.map(ingredient => ({
        value: ingredient,
        label: ingredient
    }))

    const customTheme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#c25000',
            primary: '#c25000',
            neutral0: '#000',
            neutral20: '#73260a',
            neutral30: '#c25000',
            neutral40: '#c25000',
            neutral50: '#73260a',
            neutral60: '#c25000',
            neutral80: '#73260a'            
        }           
    })

    const getImg = (e) => {
        if (e) {
            const encodedIngr = encodeURI(e.value)
            setImgURL(encodedIngr)
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.value}`)
                .then((res) => {
                    const drinks = res.data.drinks
                    const cocktails = []
                    
                    if (drinks && drinks.length > 0) {
                            drinks.forEach((drink) => {
                            cocktails.push({
                                id: drink.idDrink,
                                name: drink.strDrink,
                                img: drink.strDrinkThumb
                            })
                        })
                    }

                    dispatchCocktailsList({
                        type: 'SET_COCKTAILS_LIST',
                        cocktails
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            setImgURL(null)

            dispatchCocktailsList({
                type: 'CLEAR_COCKTAILS_LIST'
            })
        }    
    }

    return (  
        <div className="search">
            <div className="search__select">
                <Select                   
                    theme={customTheme}
                    options={ingr}
                    isSearchable
                    isClearable
                    placeholder="Search ingredients"
                    onChange={getImg}
                />
            </div>
            
            {imgURL && <img src={`https://www.thecocktaildb.com/images/ingredients/${imgURL}-Medium.png`} alt="ingredient" className="search__img" />}               

            <CocktailsList cocktailsList={cocktailsList} dispatchSelectedCocktail={dispatchSelectedCocktail} />
        </div>
    );
}
 
export default Search;