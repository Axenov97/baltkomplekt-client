import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {SolutionsSection} from "../components/sections/SolutionsSection";

import React, {useEffect} from "react";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from "react-helmet";
import {ClientsSection} from "../components/sections/ClientsSection";
import priceBg from "../img/priceBg.svg";


function Solutions() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект. Получение предварительного классификационного решения</title>

            <meta name='description' content="Балткомплект помогает партнерам в получении предварительных классификационных решений на товар,
             а также в получении классификационных решений на ввоз многокомпонентного оборудования в соответствии с ТН ВЭД ТС" />
        </Helmet>

        <FirstSection />
        <img src={priceBg} className='price__bg' alt='балткомплект'/>
        <ServicesSection />
        <SolutionsSection />
        <AboutUsSection />
        <ClientsSection />
        <PriceSection />
        <StuffSection />
        <BlogLinkGroup />
        <BlogSection />
        <HockeySection />
    </>
}

export {Solutions};