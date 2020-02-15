import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { ingredients } from '../ingr'

const Search = () => {
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
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodedIngr}`)
                .then((res) => {
                    console.log(res.data.drinks)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            setImgURL(null)

            // set selected ingr to null in state
        }    
    }

    return (  
        <div className="search">
            <Select
                className="search__select"
                theme={customTheme}
                options={ingr}
                isSearchable
                isClearable
                placeholder="Search for an ingredient"
                onChange={getImg}
            />
            {imgURL && <img src={`https://www.thecocktaildb.com/images/ingredients/${imgURL}-Medium.png`} alt="ingredient"/>}               
            
        </div>
    );
}
 
export default Search;