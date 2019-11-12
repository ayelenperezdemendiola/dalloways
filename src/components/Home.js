import React from 'react';
import Header from './Header';
import Main from './Main';

const Home = (props) => {
    const { showNav, hideNav, isOpen, foodList } = props;
    return (
        <div className="app">
            <Header
                isOpen={isOpen}
                showNav={showNav}
                hideNav={hideNav}
            />
            <Main
                foodList={foodList}
            />
        </div>
    );
}

export default Home;