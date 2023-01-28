import {Outlet} from "react-router-dom";
import React, {useEffect} from 'react'
import {getBlogContent} from "../data";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {Header} from "../components/Header";
import {Helmet} from "react-helmet";
import {observer} from "mobx-react-lite";
import {animated, useTransition} from "react-spring";

const Blog = observer( (props) => {
    const { location } = props
    const blogContent = getBlogContent().find(item => item.path === location.pathname);
    const transition = useTransition(location, (location)=> location.pathname, {
        from: {
            opacity: 0,
            // transform: 'translateX(100%)'
        },
        enter: {
            opacity: 1,
            // transform: 'translateX(0)'
        },
        leave: {
            opacity: 1,
            // transform: 'translateX(0)'
        },
    })

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500);
    }, []);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Таможенный блог. Полезные документы, кейсы, новости таможни и ответы на самые популярные вопросы от Балткомплекта</title>
            <meta name='description' content="Балткомплект предоставит самую интересную и полезную информацию для клиентов, которых интересует таможенное оформление"/>
            <link rel="canonical" href="/blog/" />
        </Helmet>

        <Header />
        <BlogLinkGroup blogPage={blogContent.title}/>
        <div className="container blog-container">
            <p style={{margin: '2% 0', letterSpacing: '0.02em', color: '#3B4853'}}>{blogContent.description}</p>

            {transition.map(({item, props, key})=>(
                <animated.div key={key} style={props}>
                    <Outlet />
                </animated.div>
            ))}

        </div>
    </>
})

export {Blog};