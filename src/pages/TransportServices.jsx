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
import {StrengthSection} from "../components/sections/StrengthSection";
import SEOTransportSection from "../components/sections/SEOTransportSection";

function TransportServices({location}) {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект - Международные перевозки грузов и товаров, комплексные поставки грузов из Европы в Россию!</title>
            <meta name='description' content="Международные перевозки товаров и грузов - наш приоритет! Также мы предоставляем услуги по перевозке сложных и опасных грузов.
            Через таможенного брокера Балткомплект Вы можете получить пакет услуг по перевозке из-за рубежа, таможенному оформлению и сопровождению товаров, грузов или продуктов питания" />
            <link rel="canonical" href="/services/transport-services/" />
        </Helmet>

        <FirstSection />
        <SEOTransportSection />
        <TransportSection />
        <AboutUsSection />
        <HockeySection />
        <StrengthSection />
        <ServicesSection />
        <ClientsSection />
        <BlogSection location={location}/>
    </>
}

export {TransportServices};