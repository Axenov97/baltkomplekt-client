import {Outlet} from 'react-router-dom'
import {Header} from "./Header";
import {Footer} from "./Footer";
import {animated, useTransition} from "react-spring";
import React from "react";

function Layout(props) {
    const {location, modalActive, setModalActive} = props

    const transition = useTransition(location, (location)=> location.pathname, {
        from: {
            opacity: .4,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 1,
        },
    })

    return <>
        <Header modalActive={modalActive} setModalActive={setModalActive} />
            {transition.map(({item, props, key})=>(
            <animated.div key={key} style={props}>
            <div
                className = { location.pathname.includes('/services/') ?
                'content ' + location.pathname.substring(10, location.pathname.length - 1) : 'content' }
            >
                <Outlet />
            </div>
            <Footer />
        </animated.div>
        ))}
    </>
}

export {Layout}