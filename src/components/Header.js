import React from 'react';

const Header = () => {
    return (  
        <nav className="header">
            <h1 className="header__heading heading-1">Cocktail Bar</h1>
            <h2 className="header__subtitle heading-2">Get a list of cocktails made from your favorite ingredient or get a totaly random cocktail</h2>
            <div className="header__random">
                <span className="header__random--visible">Get random cocktail</span>
                <span className="header__random--invisible">Go crazy!!!</span>
            </div>
        </nav>
    );
}
 
export default Header;