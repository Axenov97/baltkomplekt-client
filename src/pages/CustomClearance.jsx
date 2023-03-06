import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import React, {useEffect} from "react";
import {AdvantagesSection} from "../components/sections/AdvantagesSection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";

function CustomClearance({isScrollable, setIsScrollable, location}) {

    useEffect(() => {
        if (isScrollable) {
            setTimeout(() => {
                const price = document.querySelector('.price');
                price.scrollIntoView({behavior: 'smooth', block: 'start'}, 0)
                setIsScrollable(false)
            }, 200)

        }
     }, [isScrollable]);

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
        <PriceSection />
        <BlogSection location={location}/>
        {/*<HockeySection />*/}
    </>
}

export {CustomClearance};