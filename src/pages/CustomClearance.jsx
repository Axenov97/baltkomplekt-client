import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {useEffect} from "react";
import {AdvantagesSection} from "../components/sections/AdvantagesSection";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";
import priceBg from '../img/priceBg.svg'

function CustomClearance() {


    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet
            title="Балткомплект | Таможенное оформление товаров и грузов в Санкт-Петербурге и по всей России"
            meta={[
                {
                    "name": "description",
                    "content": "Балткомплект предоставляет услуги таможенного оформления более 20 лет." +
                        " Узнайте сроки таможенного оформления." +
                        " Мы работаем по всей России из Санкт-петербурга."}
            ]}
        />
        <FirstSection />
        <img src={priceBg} className='price__bg' alt='балткомплект'/>
        <ServicesSection />
        <AboutUsSection />
        <AdvantagesSection />
        <ClientsSection />
        <PriceSection />
        <StuffSection />
        <BlogLinkGroup />
        <BlogSection />
        <HockeySection />
    </>
}

export {CustomClearance};