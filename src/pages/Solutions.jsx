import {FirstSection} from "../components/sections/FirstSection";
import {AboutUsSection} from "../components/sections/AboutUsSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {PriceSection} from "../components/sections/PriceSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {SolutionsSection} from "../components/sections/SolutionsSection";

import {useEffect} from "react";
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
        <Helmet
            title="Получение предварительного классификационного решения | Балткомплект"
            meta={[
                {
                    "name": "description",
                    "content": "Балткомплект помогает партнерам в получении предварительных классификационных решений " +
                        "на товар, а также в получении классификационных решений на ввоз многокомпонентного оборудования, " +
                        "форма предварительного решения по классификации товара в соответствии с ТН ВЭД ТС"}
            ]}
        />
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