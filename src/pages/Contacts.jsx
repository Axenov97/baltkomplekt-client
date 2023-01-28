import React, {useEffect} from "react";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Helmet} from "react-helmet";

function Contacts() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект - таможенный брокер из Санкт-Петербурга | Контактная информация</title>
            <meta name='description' content="Все контактные данные компании Балткомплект на одной странице"/>
            <link rel="canonical" href="/contacts/" />
        </Helmet>

        <div className='contacts-container'>
            <Header />
            <div className='content' />
            <Footer />
        </div>
    </>
}

export {Contacts};