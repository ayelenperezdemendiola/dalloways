import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { isOpen, showNav, hideNav, showProduct } = props;
    return (
        <header className="app__header">
            <button className="nav--trigger" title="menu" type="button" onClick={showNav} />
            <nav className={isOpen ? 'header__nav show' : 'header__nav hide'}>
                <ul className="nav__options">
                    <li className="option">
                        <Link to="/products" class="link" onClick={showProduct}>Cositas ricas</Link>
                    </li>
                    <li className="option">
                        <a href="#" className="link">Quién soy</a>
                    </li>
                    <li className="option">
                        <a href="#" className="link">Contacto</a>
                    </li>
                </ul>
                <button className="nav--closer" title="menu" type="button" onClick={hideNav} />
            </nav>
        </header>
    );
}

export default Header;

