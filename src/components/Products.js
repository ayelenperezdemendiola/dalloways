import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { foodList } = props;
    return (
        <section className="app__products" idFor="top">
            <div className="products__wrapper">
                <Link to="/" class="link--back">Volver</Link>
                <div className="products__title--description">
                    <h2 className="products__title">¿Qué te apetece comer hoy?</h2>
                    <p className="products__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla enim ab ipsum consequatur possimus consectetur vitae? Modi laudantium sit architecto dolorum placeat sapiente eaque voluptatum, natus aliquid quibusdam porro!</p>
                </div>
                <div className="products__list--container">
                    <ul className="products__list">
                        {foodList.map((item, index) => {
                            return (
                                <Link to={`/:${item.name}`} class="link--product">
                                <li className="list__item" key={index}>
                                    <div className="item__container">
                                        <img src={item.img} className="item__img" alt={item.name} />
                                        <h3 className="item__name">{item.name}</h3>
                                    </div>
                                </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
                    {/* <a href="#top" className="link--top">
                    <div className="up--btn">
                    </div>
                    </a> */}
            </div>
        </section>
    );
}

export default Products;