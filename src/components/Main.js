import React from 'react';
import Hero from './Hero';
import Products from './Products';

const Main = (props) => {
    
    const { foodList, isOpen, isProducts } = props;

    return (
        <main className="app__main">
            <Hero
            />
        </main>
    );
}

export default Main;