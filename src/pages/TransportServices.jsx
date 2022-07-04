import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import React, {useEffect} from "react";
import {TransportSection} from "../components/sections/TransportSection";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";
import priceBg from "../img/priceBg.svg";

function TransportServices() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект. Таможенное сопровождение и транспортные услуги для юридических лиц</title>
            <meta name='description' content="Балткомплект предоставляет услуги по перевозке сложных и опасных грузов, а также международные грузоперевозки.
            Через таможенного брокера Балткомплект Вы можете получить пакет услуг по таможенному оформлению и сопровождению товаров" />
        </Helmet>

        <FirstSection />
        <img src={priceBg} className='price__bg' alt='балткомплект'/>
        <ServicesSection />
        <TransportSection />
        <AboutUsSection />
        <ClientsSection />
        <PriceSection />
        <StuffSection />
        <BlogLinkGroup />
        <BlogSection />
        <HockeySection />
    </>
}

export {TransportServices};