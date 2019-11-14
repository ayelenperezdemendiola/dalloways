import React from 'react';
import Header from './Header';
import Main from './Main';

const Home = (props) => {
    const { showNav, hideNav, isOpen, foodList, showProduct, isProducts } = props;
    return (
        <div className="app">
            <Header
                isOpen={isOpen}
                showNav={showNav}
                hideNav={hideNav}
                showProduct={showProduct}
            />
            <Main
                foodList={foodList}
                isOpen={isOpen}
                isProducts={isProducts}
            />
        </div>
    );
}

export default Home;