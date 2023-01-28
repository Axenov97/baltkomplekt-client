import cubsImage from '../../img/coubs.svg'
import {ModalContext} from "../../context";
import React, {useContext} from 'react'
import {sendYandexMetrik} from "../../utils/metriks";
import startBackground from './../../img/bg.svg'
import ShippingLinks from "../shippingComponents/ShippingLinks";

function ShippingStartSection( ){
    const {openModal} = useContext(ModalContext)

    return <>
            <section className="first__section ">
                <div className="container">
                    <div className="flex-container">
                        <div className="first__section_left new-home">
                            <img src={cubsImage} className="img-coubs" alt='балткомплект'/>
                            <h1>Грузоперевозки <br/>
                                из-за рубежа</h1>
                            <div className="alarms">
                                <div className='alarm'>
                                    <p>Только Юридические лица</p>
                                </div>
                                <div className='alarm'>
                                    <p>Работаем в условиях санкций</p>
                                </div>
                            </div>
                            <p>
                                Предоставляем самые различные виды услуг по <b>международным грузоперевозкам: </b> <br/>
                                международные ж/д перевозки, международные авиаперевозки, международные контейнерные перевозки,
                                а также <b>перевозки из-за рубежа автомобильным транспортом.</b>
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
}
export {ShippingStartSection}