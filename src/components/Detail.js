import React from 'react';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const { routerProps, foodList } = props;
    const { name } = routerProps.match.params;
    const myFood = foodList.find(item => ':' + item.name.toUpperCase() === name.toUpperCase());
    return (
        <section className="app__products detail">
            <div className="products__wrapper">
            <Link to="/products" class="link--back">Volver</Link>
            {myFood ?
                <div className="item__container--detail">
                    <img src={myFood.img} className="item__img" alt={myFood.name} />
                    <h3 className="item__name">{myFood.name}</h3>
                    <p className="item__description">{myFood.description}</p>
                </div>
            :
            <p className="add">Elige lo que más te guste y conoce sus propiedades</p>
            }
            </div>
        </section>
    );
}

export default Detail;