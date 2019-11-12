import React from 'react';
import './styles/App.scss';
import { foodList } from './foodList/foodList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foodList,
      // isOpen: false
    }
  }

  showNav = () => {
    const appNav = document.querySelector('.header__nav');
    appNav.classList.remove('hide');
    appNav.classList.add('show');
  }

  hideNav = () => {
    const appNav = document.querySelector('.header__nav');
    appNav.classList.remove('show');
    appNav.classList.add('hide');
  }

  render() {
    const { foodList } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          <button className="nav--trigger" title="menu" type="button" onClick={this.showNav} />
          <nav className="header__nav hide">
            <ul className="nav__options">
              <li className="option">
                <a href="#" className="link">Cositas ricas</a>
              </li>
              <li className="option">
                <a href="#" className="link">Quién soy</a>
              </li>
              <li className="option">
                <a href="#" className="link">Contacto</a>
              </li>
            </ul>
            <button className="nav--closer" title="menu" type="button" onClick={this.hideNav} />
          </nav>
        </header>
        <main className="app__main">
          <div className="hero__container">
            <div className="main__hero">
              <h1 className="hero__title">Dalloway's</h1>
              <p className="title__description">-Comida vegetariana hecha en casa-</p>
            </div>
          </div>
          <section className="app__products">
            <div className="products__wrapper">
              <div className="products__title--description">
                <h2 className="products__title">¿Qué te apetece hoy?</h2>
                <p className="products__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla enim ab ipsum consequatur possimus consectetur vitae? Modi laudantium sit architecto dolorum placeat sapiente eaque voluptatum, natus aliquid quibusdam porro!</p>
              </div>
              <div className="products__list--container">
                <ul className="products__list">
                  {foodList.map((item, index) => {
                    return (
                      <li className="list__item">
                        <div className="item__container">
                          <img src={item.img} className="item__img" alt={item.name} />
                          <p className="item__name">{item.name}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
