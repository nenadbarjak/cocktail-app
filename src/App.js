import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cocktail from './components/Cocktail';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <Cocktail />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
