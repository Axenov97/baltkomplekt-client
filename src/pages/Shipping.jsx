import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import {ShippingStartSection} from "../components/sections/ShippingStartSection";
import CountriesSection from "../components/sections/CountriesSection";
import {Outlet} from "react-router-dom";

const Shipping = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);
    return <>
        <Helmet >
            <html lang="ru" />
            <title>Услуги международных грузоперевозок в Санкт-Петербурге</title>
            <meta name='description' content="Предоставляем различные виды услуг по международным грузоперевозкам:
            международные ж/д перевозки, международные авиаперевозки, международные контейнерные перевозки, а также перевозки из-за рубежа автомобильным транспортом."/>
        </Helmet>

        <Outlet />
        <CountriesSection />
    </>
};

export default Shipping;