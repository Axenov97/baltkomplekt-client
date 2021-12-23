import { ReactComponent as Logo } from '../img/logo.svg';
import logo from '../img/logo.svg'
import {NavLink, useLocation} from "react-router-dom";
import {ModalContext} from "../context";
import {useContext, useState} from 'react'
import {sendYandexMetrik} from "../utils/metriks";

function Header() {
    const {openModal, modalActive} = useContext(ModalContext)
    const [burgerActive, setBurgerActive] = useState(false)
    const [subLinkOpen, setSubLinkOpen] = useState(false)
    const location = useLocation()

    let subLink = ''
    location.pathname.includes('services') ? subLink = 'sub__link active' : subLink = 'sub__link';
    subLinkOpen ? subLink = `${subLink} open` : subLink = `${subLink}`;
    // burgerActive ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
    const handleServicesSubMenu = () => {
        setSubLinkOpen(!subLinkOpen)
        setBurgerActive(!burgerActive)
    }
    return <header className="header" id="home" >
                <div className="header-body" style={modalActive ? {paddingRight: 8 + 'px'} : {paddingRight: 0}}>
                    <div className="flex-container">
                        <div className="header__bg" />

                        <div className="header__brand">
                            <NavLink to='/' className="header__brand_link link" id="homeBtn">
                                <img src={logo} alt="Балткомплект"/>
                            </NavLink>
                        </div>

                        <div className={burgerActive ? 'header__burger active' : 'header__burger'} onClick={()=>setBurgerActive(!burgerActive)}>
                            <span />
                        </div>

                        <div className={burgerActive ? 'header__navigation active' : 'header__navigation'}>
                            <nav className="navigation">
                                <ul className="menu topmenu">
                                    <li><p
                                        id="servicesBtn"
                                        className = {subLink}
                                        onClick={()=>setSubLinkOpen(!subLinkOpen)}
                                    >
                                        Услуги
                                    </p>
                                        <ul className={subLinkOpen ? 'submenu open' : 'submenu'}>
                                            <li><NavLink to="/services/custom-clearance" onClick={handleServicesSubMenu}>Таможенное оформление</NavLink></li>
                                            <li><NavLink to="/services/transport-services" onClick={handleServicesSubMenu}>Транспортные услуги</NavLink></li>
                                            <li><NavLink to="/services/ved" onClick={handleServicesSubMenu}>Вэд</NavLink></li>
                                            <li><NavLink to="/services/solutions" onClick={handleServicesSubMenu}>Классификационные решения</NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><NavLink to='/blog'>Блог</NavLink></li>
                                    <li><NavLink to="/contacts" id="contactBtn">Контакты</NavLink></li>
                                    <li><NavLink to='/about'>О нас</NavLink></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__numbers">
                            <p>Бесплатно по РФ <br/>
                                <a href="tel:+78007754794">8 800 775-47-94</a>
                            </p>
                            <p>В Санкт-Петербурге <br/>
                                <a href="tel:+78127186970">8 (812) 718-69-70</a>
                            </p>
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
                            <p className="header__lang_link" title="Временно недоступно">ENG</p>
                            <p className="header__lang_link lang-active">РУС</p>

                            <p className="header__lang_link header__lang_mobile">РУС</p>
                        </div>
                    </div>
                </div>
            </header>
}

export  {Header};