import React, {useEffect} from 'react'
import {Helmet} from "react-helmet";
import {animated, useTransition} from "react-spring";
import {Outlet} from "react-router-dom";
import {StrengthSection} from "../components/sections/StrengthSection";
import {ClientsSection} from "../components/sections/ClientsSection";
import {BlogSection} from "../components/blogComponents/BlogSection";

function Services({location}) {
    const transition = useTransition(location, (location)=> location.pathname, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 1,
        },
    })

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500);
    }, []);

    return <>
            <Helmet >
                <html lang="ru" />
                <title>Балткомплект | Таможенный брокер СПб | Таможенное оформление по всей России</title>
                <meta name='description' content='Таможенный брокер Балткомплект является одним из самых проверенных
                 представителей на рынке таможенного оформления грузов и товаров. Балткомплект лучший таможенный представитель в сфере таможни!'/>
                <link rel="canonical" href="/" />
            </Helmet>

        <div>
            {transition.map(({item, props, key})=>(
                <animated.div key={key} style={props}>
                    <Outlet />
                </animated.div>
            ))}
        </div>
    </>
}

export {Services};