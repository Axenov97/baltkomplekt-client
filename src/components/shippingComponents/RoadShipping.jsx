import React, {useContext} from 'react';
import cubsImage from "../../img/coubs.svg";
import {sendYandexMetrik} from "../../utils/metriks";
import startBackground from "../../img/bg.svg";
import ShippingLinks from "./ShippingLinks";
import {ModalContext} from "../../context";
import {Helmet} from "react-helmet";

const RoadShipping = () => {
    const {openModal} = useContext(ModalContext)

    return <>
        <Helmet >
            <html lang="ru" />
            <title>Балткомплект | Международные автомобильные грузоперевозки! | Только Юр.Лица</title>
            <meta name='description' content="Грузоперевозки из-за рубежа Автомобильным транспортом. Опасные и нестандартные грузы . Работа только с юридическими лицами."/>
        </Helmet>
        <section className="first__section ">
            <div className="container">
                <div className="flex-container">
                    <div className="first__section_left new-home">
                        <img src={cubsImage} className="img-coubs" alt='балткомплект'/>
                        <h1>Международные <br/>
                            автомобильные перевозки</h1>
                        <div className="alarms">
                            <div className='alarm'>
                                <p>Только Юридические лица</p>
                            </div>
                            <div className='alarm'>
                                <p>Работаем в условиях санкций</p>
                            </div>
                        </div>
                        <p>
                            Оказываем услуги по международным автомобильным грузоперевозкам. <br/>
                            Работаем в условиях санкций. <br/>
                            <b>Мы не работаем с физлицами и маленькими объемами поставок.</b>
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

export default RoadShipping;