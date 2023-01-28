import logo from '../img/bw_logo.svg'
import {NavLink, useLocation} from "react-router-dom";
import {ModalContext} from "../context";
import React, {useContext, useState} from 'react'

import {sendYandexMetrik} from "../utils/metriks";

function Header() {
    const {openModal, modalActive} = useContext(ModalContext)
    const [burgerActive, setBurgerActive] = useState(false)
    const [subLinkOpen, setSubLinkOpen] = useState(false)
    const [isStepTwo, setStepTwo] = useState(false)
    const location = useLocation()

    const [langState, setLangState] = useState(true)

    let subLink = ''

    location.pathname.includes('services') ? subLink = 'sub__link active' : subLink = 'sub__link';
    subLinkOpen ? subLink = `${subLink} open` : subLink = `${subLink}`;
    // burgerActive ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

    const handleServicesSubMenu = () => {
        setSubLinkOpen(!subLinkOpen)
        setBurgerActive(!burgerActive)
    }
    // const handleLanguageChange = (lang) => {
    //     i18n.changeLanguage(lang)
    //     setLangState(!langState)
    // }

    return <header className="header" id="home" >
                <div className="header-body" style={modalActive ? {paddingRight: 8 + 'px'} : {paddingRight: 0}}>
                    <div className="flex-container header-container">
                        <div className="header__bg" />

                        <div className={burgerActive ? 'header__burger active' : 'header__burger'} onClick={()=>setBurgerActive(!burgerActive)}>
                            <span />
                        </div>

                        <div className="header__brand">
                            <NavLink to='/' className="header__brand_link link" id="homeBtn">
                                <img src={logo} alt="Балткомплект"/>
                            </NavLink>
                        </div>

                        <div className={burgerActive ? 'header__navigation active' : 'header__navigation'}>
                            <nav className="navigation">
                                <ul className="menu topmenu">
                                    <li><NavLink to='/' onClick={()=>setBurgerActive(!burgerActive)}>Главная</NavLink></li>
                                    <li>
                                        <NavLink
                                            to='/services'
                                            id="servicesBtn"
                                            className = {subLink}
                                            onClick={()=>setBurgerActive(!burgerActive)}
                                        >
                                            Услуги
                                        </NavLink>
                                        <ul className={subLinkOpen ? 'submenu open' : 'submenu'}>
                                            <li><NavLink to="/services/transport-services/" onClick={handleServicesSubMenu}>Международные перевозки</NavLink></li>
                                            <li><NavLink to="/services/custom-clearance/" onClick={handleServicesSubMenu}>Таможенное оформление</NavLink></li>
                                            <li><NavLink to="/services/ved/" onClick={handleServicesSubMenu}>ВЭД</NavLink></li>
                                            <li><NavLink to="/services/solutions/" onClick={handleServicesSubMenu}>Классификационные решения</NavLink></li>
                                            <li><NavLink to="/services/finuslugi/" onClick={handleServicesSubMenu}>Финансовые услуги</NavLink></li>
                                            <li><NavLink to="/services/parallel-import/" onClick={handleServicesSubMenu}>Параллельный импорт</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to='/blog/' onClick={()=>setBurgerActive(!burgerActive)}>Блог</NavLink></li>
                                    <li><NavLink to="/contacts/" id="contactBtn" onClick={()=>setBurgerActive(!burgerActive)}>Контакты</NavLink></li>
                                    <li><NavLink to='/about/' onClick={()=>setBurgerActive(!burgerActive)}>О нас</NavLink></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__numbers">
                            <a href="tel:+78007754794">Бесплатно по РФ<br/><span>8 800 775-47-94</span></a>
                            <a href="tel:+78127186970">В Санкт-Петербурге<br/><span>8 (812) 718-69-70</span></a>
                        </div>

                        <div className="header__btn">
                            <button
                                id="_modal-callback"
                                className="header__btn_call js-btn-open"
                                onClick={() => {
                                    openModal('modal-callback')
                                    sendYandexMetrik('reachGoal','ButtonCallback')
                                }}
                            >
                                Перезвоните мне
                            </button>
                        </div>

                        <div className="header__lang">
                            <p className={!langState ? "header__lang_link lang-active" : "header__lang_link"}>ENG</p>

                            <p className={langState ? "header__lang_link lang-active" : "header__lang_link"}>РУС</p>

                            <p className="header__lang_link header__lang_mobile">РУС</p>
                        </div>
                    </div>
                </div>
            </header>
}

export  {Header};