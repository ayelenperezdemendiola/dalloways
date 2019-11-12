import React from 'react';
import Hero from './Hero';
import Products from './Products';

const Main = (props) => {
    
    const { foodList } = props;

    return (
        <main className="app__main">
            <Hero
            />
            <Products
            foodList={ foodList }
            />
        </main>
    );
}

export default Main;