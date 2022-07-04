import React, {useEffect} from 'react'

import {AboutUsSection} from "../components/sections/AboutUsSection";
import {FirstSection} from "../components/sections/FirstSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {StrengthSection} from "../components/sections/StrengthSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {ClientsSection} from "../components/sections/ClientsSection";
import {Helmet} from "react-helmet";
import AuditSection from "../components/sections/AuditSection";



function Home({auditButtonDisable, setAuditButtonDisable}) {

    useEffect(()=>{
        setAuditButtonDisable(true)
    },[])

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
            <Helmet >
                <html lang="ru" />
                <title>Балткомплект - таможенный брокер для юридических лиц. Стоимость услуг таможенного брокера в СПб, Москве и по всей России</title>
                <meta name='description' content="Таможенный брокер Балткомплект - самый надежный и проверенный представитель на рынке таможенного оформления грузов и товаров. Балткомплект однозначно лучший таможенный брокер в Санкт-Петербурге и по всей России!"/>
            </Helmet>

        <FirstSection />
        <AuditSection auditButtonDisable={auditButtonDisable}/>
        <AboutUsSection />
        <ClientsSection />
        <StrengthSection />
        <ServicesSection />
        <StuffSection />
        <PriceSection />
        <BlogLinkGroup />
        <BlogSection />
        <HockeySection />
    </>
}

export {Home};