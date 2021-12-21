import {Outlet} from "react-router-dom";
import {animated, useTransition} from "react-spring";
import React, {useEffect} from 'react'
import {getBlogContent} from "../data";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {Header} from "../components/Header";
import {Helmet} from "react-helmet";
import {observer} from "mobx-react-lite";

const Blog = observer( (props) => {
    const { location, blogPage, setBlogPage } = props

    const blogContent = getBlogContent().find(item => item.path === location.pathname);
    // const transition = useTransition(location, (location)=> location.pathname, {
    //     from: {
    //         opacity: 0,
    //         transform: 'translateX(100%)'
    //     },
    //     enter: {
    //         opacity: 1,
    //         transform: 'translateX(0)'
    //     },
    //     leave: {
    //         opacity: 1,
    //         transform: 'translateX(0)'
    //     },
    // })

    useEffect(() => {
        setBlogPage('Блог')
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500);
    }, []);

    return <>
        <Helmet
            title="Балткомплект | Блог | Документы, кейсы, новости и ответы на популярные вопросы "
            meta={[
                {
                    "name": "description",
                    "content": "Блог компании балткомплект содержит самую интересную и полезную информацию для клиентов, " +
                        "которых интересует таможенное дело"}
            ]}
        />
        <Header />
        <BlogLinkGroup blogPage={blogPage}/>
        <div className="container blog-container">
            <p style={{marginBottom: '2%', letterSpacing: '0.02em', color: '#3B4853'}}>
                {blogContent.description}
            </p>
            {/*{transition.map(({item, props, key})=>(*/}
            {/*    <animated.div key={key} style={props}>*/}
                    <Outlet />
                {/*</animated.div>*/}
            {/*))}*/}
        </div>
    </>
})

export {Blog};