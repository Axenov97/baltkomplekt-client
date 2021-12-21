import {useEffect} from 'react'

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

function Home() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet
            title="Балткомплект | Таможенный брокер СПб | Таможенное оформление по всей России"
            meta={[
                {
                    "name": "description",
                    "content": "Таможенный брокер Балткомплект является одним из самых проверенных представителей " +
                        "на рынке таможенного оформления грузов и товаров. " +
                        "Балткомплект лучший таможенный представитель в сфере таможни!"
                }
            ]}
        />
        <FirstSection />
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