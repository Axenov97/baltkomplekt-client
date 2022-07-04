import {Link} from "react-router-dom";
import bg from '../img/404/center404.svg'
import bottom from '../img/404/bottom404.svg'
import {Header} from "../components/Header";
import {Helmet} from "react-helmet";
import React from "react";

function NotFound() {
    
    return <>
        <Helmet >
            <html lang="ru" />
            <title>404</title>
            <meta name='description' content="Not Found" />
            <meta name="prerender-status-code" content ="404" />
        </Helmet>

        <div className="content__404">
            {/*<Header />*/}
            <div className="container container__404 flex-container">
                <h1>Извините, <br/>данная страница не существует или находится в разработке...</h1>
                <Link className="btn btn__404 btn__blue_border" to='/' >На главную</Link >
                <img className="center__img" src={bg} alt='балткомплект'/>
                <img className="bottom__img" src={bottom}  alt='балткомплект'/>
            </div>
        </div>
    </>
}

export {NotFound};