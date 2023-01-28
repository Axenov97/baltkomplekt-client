import React, {useContext} from 'react';
import cubsImage from "../../img/coubs.svg";
import {sendYandexMetrik} from "../../utils/metriks";
import startBackground from "../../img/bg.svg";
import ShippingLinks from "./ShippingLinks";
import {Helmet} from "react-helmet";
import {ModalContext} from "../../context";

const DangerShipping = () => {
    const {openModal} = useContext(ModalContext)

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект | Перевозка опасных грузов</title>
            <meta name='description' content="Перевозки опасных грузов в Санкт-Петербурге.
            Перевозки из-за рубежа в условиях санкций 2022."/>
        </Helmet>
        <section className="first__section ">
            <div className="container">
                <div className="flex-container">
                    <div className="first__section_left new-home">
                        <img src={cubsImage} className="img-coubs" alt='балткомплект'/>
                        <h1>Перевозка <br/>
                            опасных грузов</h1>
                        <div className="alarms">
                            <div className='alarm'>
                                <p>Только Юридические лица</p>
                            </div>
                            <div className='alarm'>
                                <p>Работаем в условиях санкций</p>
                            </div>
                        </div>
                        <p>
                            Оказываем услуги по международным перевозкам опасных грузов. <br/>
                            Мы не боимся сложных задач. <br/>
                            <b>Работаем только с Юр. лицами</b>
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

export default DangerShipping;