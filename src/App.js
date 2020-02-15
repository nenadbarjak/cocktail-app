import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cocktail from './components/Cocktail';
import Search from './components/Search';
import cocktailsReducer from './reducers/cocktailsReducer'


function App() {
  //const cocktailsInitState = []
  const [cocktailsList, dispatchCocktailsList] = useReducer(cocktailsReducer, [])

  return (
    <div className="App">
      <Header />
      <Cocktail />
      <Search 
        cocktailsList={cocktailsList}
        dispatchCocktailsList={dispatchCocktailsList}
      />
      <Footer />
    </div>
  );
}

export default App;
