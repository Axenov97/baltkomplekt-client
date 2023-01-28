import {useLocation} from "react-router-dom";
import {getStartContent} from "../../data";
import {ModalContext} from "../../context";
import React, {useContext} from 'react'
import {sendYandexMetrik} from "../../utils/metriks";

function FirstSection( ){
    let location = useLocation();
    let startContent = getStartContent().find(item => item.path === location.pathname);
    const {openModal} = useContext(ModalContext)

    return <>
            <section className="first__section">
                <div className="container">
                    <div className="flex-container">
                        <div className="first__section_left">
                            {startContent.title}
                            <div className="alarms">
                                <div className='alarm'>
                                    <p>Только юридические лица</p>
                                </div>
                                <div className='alarm'>
                                    <p>Работаем в условиях санкций</p>
                                </div>
                            </div>
                            {startContent.description}
                            <button
                                className="btn btn__blue"
                                onClick={() => openModal('modal-text')}
                            >
                                Расчитать перевозку
                            </button>
                            <button
                                className="btn btn__white_border"
                                onClick={() => {
                                    openModal('modal-text')
                                    sendYandexMetrik('reachGoal','ButtonZayavka')
                                }}
                            >
                                Оставить заявку
                            </button>
                        </div>
                        <div className="first__section_right">
                            <img src={startContent.image} alt='балткомплект' />
                        </div>
                    </div>
                </div>
            </section>
        </>
}
export {FirstSection}