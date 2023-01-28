import React from 'react';
import {NavLink} from "react-router-dom";

const ShippingLinks = () => {
    return (
        <div className="home-links">
            <NavLink to='/services/transport-services/air-shipping/' className="home-links__btn">Авиаперевозки</NavLink>
            <NavLink to='/services/transport-services/railway-shipping/' className="home-links__btn">Ж/д перевозки</NavLink>
            <NavLink to='/services/transport-services/road-shipping/' className="home-links__btn">Международные автомобильные перевозки</NavLink>
            <NavLink to='/services/transport-services/sea-shipping/' className="home-links__btn">Морские контейнерные перевозки</NavLink>
            <NavLink to='/services/transport-services/multimodal-shipping/' className="home-links__btn">Мультимодальные перевозки</NavLink>
            <NavLink to='/services/transport-services/dangerous-shipping/' className="home-links__btn">Перевозка опасных грузов</NavLink>
        </div>
    );
};

export default ShippingLinks;