import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import React, {useEffect, useRef} from "react";
import {AdvantagesSection} from "../components/sections/AdvantagesSection";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";

function CustomClearance({isPrice, priceRef, location}) {

    useEffect(() => {
        if (!isPrice) {
            const body = document.querySelector('#root');
            body.scrollIntoView({behavior: 'smooth'}, 500)
        }
     }, [isPrice]);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект. Таможенное оформление грузов и товаров в Санкт-Петербурге, Москве и по всей России</title>
            <meta name='description' content="Балткомплект предоставляет услуги таможенного оформления более 20 лет. Узнайте стоимость таможенного брокера. Таможенное оформление в Санкт-петербурге." />
            <link rel="canonical" href="/services/custom-clearance/" />
        </Helmet>

        <FirstSection />
        <ServicesSection />
        <AboutUsSection />
        <AdvantagesSection />
        <ClientsSection />
        <PriceSection priceRef={priceRef} isPrice={isPrice}/>
        <BlogSection location={location}/>
        {/*<HockeySection />*/}
    </>
}

export {CustomClearance};