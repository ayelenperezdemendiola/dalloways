import React from 'react';
import './styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  showNav = () => {
    const appNav = document.querySelector ('.header__nav');
    appNav.classList.remove ('hide');
    appNav.classList.add ('show');
  }

  hideNav = () => {
    const appNav = document.querySelector ('.header__nav');
    appNav.classList.remove('show');
    appNav.classList.add ('hide');
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
        <button className="nav--trigger" title="menu" type="button" onClick={this.showNav}/>
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
              <button className="nav--closer" title="menu" type="button" onClick={this.hideNav}/>
            </nav>
        </header>
        <main className="app__main">
          <div className="main__hero">
            <h1 className="hero__title">Dalloway's</h1>
            <p className="title__description">-Comida vegetariana hecha en casa-</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
