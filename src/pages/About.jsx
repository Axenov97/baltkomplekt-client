import React, {useEffect, useRef} from "react";
import {Helmet} from 'react-helmet';
import video from './../video/video.mp4'
import Accreditations from "../components/sections/Accreditations";

function About() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    // const vidRef=useRef();

    // useEffect(() => { vidRef.current.play(); },[]);

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект. Таможенное оформление грузов и товаров по всей стране для юридических лиц.</title>
            <meta name='description' content="Балткомплект - это таможенный представитель из Санкт-Петербурга. Мы занимаемся таможенным оформлением грузов и товаров с 2000 года. Оформление товаров и грузов в Москве, СПб и по всей России."/>
            <link rel="canonical" href="/about/" />
        </Helmet>

        <section className="about-page__start">
            <div className="container flex-container">
                <h1>О нас</h1>
                <div className="about-page__start_content">
                    <div className="alarms">
                        <div className='alarm'>
                            <p>Только юридические лица</p>
                        </div>
                        <div className='alarm'>
                            <p>Работаем в условиях санкций</p>
                        </div>
                    </div>
                    <p>Группа компаний «Балткомплект» — таможенный представитель/брокер в России с опытом работы более 20 лет.</p>
                    <p>
                        Предоставляем услуги по таможенному оформлению, по доставке дверь дверь,
                        международные всех видов и всеми способами: железнодорожные перевозки, авиа перевозки,
                        контейнерные перевозки, автоперевозки из стран Азии, Индии, Ирана, Турции, Европы.
                    </p>
                    <p>
                        Предоставляем услуги по всей России. Работаем на Балтийской, Акцизной, Пулковской, Санкт-Петербургской,
                        Шереметьевской, Сибирской, Новороссийской, Белгородской, Ростовской и Владивостокской таможнях.
                    </p>
                    <p>
                        Мы пользуемся в Северо-Западном округе наибольшим авторитетом и доверием клиентов.
                        К нам за помощью обращаются различные организации, занимающиеся внешне - экономической деятельностью:
                        <b> юридические лица, коммерческие структуры, государственные предприятия.</b>
                    </p>
                </div>
                <div className="about-page__start_preview">
                    <h4>У Балткомплект есть своя хоокейная команда!</h4>
                    <p>
                        Наша команда профессионалов работает, как единый механизм, как в профессиональной деятельности,
                        так и на хоккейном льду. Недавно мы выпустили фильм,
                        чтобы вы лучше познакомились с нашим духом и подходом к делу Приятного просмотра!
                    </p>
                    <div className="video" >

                            <video
                                src={video}
                                // ref={ vidRef }
                                muted
                                autoPlay
                                loop
                            />
                            <a href='https://www.youtube.com/watch?v=m5-jbRXe0lk' target='_blank' className="btn btn__white">Смотреть видео</a>

                    </div>
                </div>
            </div>
        </section>
        <Accreditations />
    </>
}

export {About};