import {BlogSection} from "../components/blogComponents/BlogSection";
import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import React, {useEffect} from "react";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";
import {StrengthSection} from "../components/sections/StrengthSection";
import {VedSection} from "../components/sections/VedSection";
import AuditSection from "../components/sections/AuditSection";

function Financial({location}) {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект - финансовые услуги связанные с внешнеэкономическими операциями!</title>
            <meta name='description' content="Балткомплект предоставляет финансовые услуги связанные с внешнеэкономическими операциями уже более 20 лет.
            Финансовое сопровождения сделок. Организация работ по взвешиванию груза, определению качества товара, отбор образцов и проб в службы." />
            <link rel="canonical" href="/services/financial-services/" />
        </Helmet>

        <FirstSection />
        <AuditSection />
        <VedSection />
        <AboutUsSection />

        <HockeySection />
        <StrengthSection />
        <ServicesSection />
        <ClientsSection />
        <BlogSection location={location}/>
    </>
}

export {Financial};