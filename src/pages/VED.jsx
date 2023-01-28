import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {VedSection} from "../components/sections/VedSection";
import React, {useEffect} from "react";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";

function VED({location}) {

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
            <link rel="canonical" href="/services/ved/" />
        </Helmet>

        <FirstSection />
        <ServicesSection />
        <VedSection />
        <AboutUsSection />
        <ClientsSection />
        <PriceSection />
        <BlogSection location={location}/>
        <HockeySection />
    </>
}

export {VED};