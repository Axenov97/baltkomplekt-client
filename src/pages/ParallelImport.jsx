import {BlogSection} from "../components/blogComponents/BlogSection";
import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import React, {useEffect} from "react";
import {TransportSection} from "../components/sections/TransportSection";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";
import {StrengthSection} from "../components/sections/StrengthSection";
import SEOTransportSection from "../components/sections/SEOTransportSection";
import Chain from "../components/sections/Chain";
import SEOParallelSection from "../components/sections/SEOParallelSection";

function ParallelImport({location}) {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект - Параллельный импорт в условиях санкций!</title>
            <meta name='description' content="Параллельный импорт в условиях санкций!" />
            <link rel="canonical" href="/services/parallel-import/" />
        </Helmet>

        <FirstSection />
        <SEOParallelSection />
        <Chain />
        <AboutUsSection />

        <HockeySection />
        <StrengthSection />
        <ServicesSection />
        <ClientsSection />
        <BlogSection location={location}/>
    </>
}

export {ParallelImport};