import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section className="app__about" idFor="top">
            <div className="products__wrapper">
                <Link to="/" class="link--back">Volver</Link>
                    <img src="https://media.licdn.com/dms/image/C4D03AQEddfTOyE-IJQ/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=jJqfNz-4rkY7c1buSoSJFbIQNzXFF0pzsc72owEVo5o" className="about__img" alt="picture of the owner"></img>
                    <h2 className="about__title">
                        Charito
                    </h2>
                    <p className="about__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nobis, eligendi sapiente consequatur voluptatibus, sint earum minima accusantium, officiis iusto nihil voluptatem? Reprehenderit nulla ipsa quia, doloribus nihil iste aliquam!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores doloremque illum earum eaque minus nesciunt, repudiandae natus error quidem ullam nostrum accusantium eveniet odit rem consequatur consequuntur placeat labore alias?
                    </p>
                </div>
        </section>
    );
}

export default AboutMe;