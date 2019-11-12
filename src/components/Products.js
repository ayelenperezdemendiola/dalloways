import React from 'react';

const Products = (props) => {
    const { foodList } = props;
    return (
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
                                <li className="list__item" key={index}>
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
    );
}

export default Products;