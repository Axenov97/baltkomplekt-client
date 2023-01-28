import React, {useEffect} from 'react'
import {BlogSection} from "../components/blogComponents/BlogSection";
import {StrengthSection} from "../components/sections/StrengthSection";
import {ClientsSection} from "../components/sections/ClientsSection";
import {Helmet} from "react-helmet";
import {HomeSection} from "../components/sections/HomeSection";

function Home({setIsPrice, location}) {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
            <Helmet >
                <html lang="ru" />
                <title>Балткомплект | Таможенный брокер СПб | Таможенное оформление по всей России</title>
                <meta name='description' content='Таможенный брокер Балткомплект является одним из самых проверенных
                 представителей на рынке таможенного оформления грузов и товаров. Балткомплект лучший таможенный представитель в сфере таможни!'/>
                <link rel="canonical" href="/" />
            </Helmet>

        <HomeSection setIsPrice={setIsPrice}/>
        <StrengthSection />
        <ClientsSection />
        <BlogSection location={location}/>
    </>
}

export {Home};