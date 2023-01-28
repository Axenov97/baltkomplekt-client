import React, {useContext} from 'react';
import cubsImage from "../../img/coubs.svg";
import {sendYandexMetrik} from "../../utils/metriks";
import startBackground from "../../img/bg.svg";
import ShippingLinks from "./ShippingLinks";
import {ModalContext} from "../../context";
import {Helmet} from "react-helmet";

const MultimodalShipping = () => {
    const {openModal} = useContext(ModalContext)

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект | Мультимодальные перевозки</title>
            <meta name='description' content="Мультимодальные перевозки в Санкт-Петербурге.
            Беремся только за перевозку больших объемов из-за границы."/>
        </Helmet>

        <section className="first__section ">
            <div className="container">
                <div className="flex-container">
                    <div className="first__section_left new-home">
                        <img src={cubsImage} className="img-coubs" alt='балткомплект'/>
                        <h1>Мультимодальные <br/>
                            перевозки</h1>
                        <div className="alarms">
                            <div className='alarm'>
                                <p>Только Юридические лица</p>
                            </div>
                            <div className='alarm'>
                                <p>Работаем в условиях санкций</p>
                            </div>
                        </div>
                        <p>
                            Мультимодальные перевозки в условиях санкций 2022 года. <br/>
                            Беремся только за перевозку больших объемов грузов из-за границы. <br/>
                            <b>Не работаем с физлицами!</b>
                        </p>

                        <ShippingLinks />

                        <button
                            className="btn btn__blue_border"
                            onClick={() => {
                                openModal('modal-text')
                                sendYandexMetrik('reachGoal','ButtonZayavka')
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                    <div className="first__section_right">
                        <img src={startBackground} alt='балткомплект' />
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default MultimodalShipping;