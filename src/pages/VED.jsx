import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {VedSection} from "../components/sections/VedSection";
import React, {useEffect} from "react";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";
import priceBg from "../img/priceBg.svg";

function VED() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект. ВЭД. Внешняя экономическая деятельность</title>
            <meta name='description' content="Таможенный представитель Балткомплект находится на рынке ВЭД уже более 20 лет.
            Мы занимаемся таможенным оформлением грузов, товаров, перевозками по всей стране.
            Работаем ИСКЛЮЧИТЕЛЬНО с Юридическими лицами." />
        </Helmet>

        <FirstSection />
        <img src={priceBg} className='price__bg' alt='балткомплект'/>
        <ServicesSection />
        <VedSection />
        <AboutUsSection />
        <ClientsSection />
        <PriceSection />
        <StuffSection />
        <BlogLinkGroup />
        <BlogSection />
        <HockeySection />
    </>
}

export {VED};