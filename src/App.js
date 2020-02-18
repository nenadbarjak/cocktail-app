import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cocktail from './components/Cocktail';
import Search from './components/Search';
import cocktailsReducer from './reducers/cocktailsReducer'
import selectedReducer from './reducers/selectedReducer'


function App() {

  const [cocktailsList, dispatchCocktailsList] = useReducer(cocktailsReducer, [])

  const [selectedCocktail, dispatchSelectedCocktail] = useReducer(selectedReducer, {})

  return (   
    <div className="App">
      <Header 
        dispatchSelectedCocktail={dispatchSelectedCocktail}
      />
      <Cocktail 
        cocktail={selectedCocktail} 
        dispatchSelectedCocktail={dispatchSelectedCocktail}
      />
      
      <Search 
        cocktailsList={cocktailsList}
        dispatchCocktailsList={dispatchCocktailsList}
        dispatchSelectedCocktail={dispatchSelectedCocktail}
      />
      <Footer />
    </div>
  );
}

export default App;
