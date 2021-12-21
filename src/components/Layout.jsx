import {Outlet} from 'react-router-dom'
import {Header} from "./Header";
import {Footer} from "./Footer";
import {animated, useTransition} from "react-spring";

function Layout(props) {
    const {location, modalActive, setModalActive} = props

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

    return <>
        <Header modalActive={modalActive} setModalActive={setModalActive} />
            {transition.map(({item, props, key})=>(
            <animated.div key={key} style={props}>
                <div
                    className = { location.pathname.includes('/services/') ?
                    'content ' + location.pathname.substr(10) : 'content' }
                >
                    <Outlet />
                </div>
                <Footer />
            </animated.div>
        ))}

    </>
}

export {Layout}