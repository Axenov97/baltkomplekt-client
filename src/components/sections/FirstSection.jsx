import cubsImage from '../../img/coubs.svg'
import {useLocation} from "react-router-dom";
import {getStartContent} from "../../data";
import {ModalContext} from "../../context";
import {useContext} from 'react'

function FirstSection(){
    let location = useLocation();
    let startContent = getStartContent().find(item => item.path === location.pathname);
    const {openModal} = useContext(ModalContext)

    return <>
            <section className="first__section">
                <div className="container">
                    <div className="flex-container">
                        <div className="first__section_left">
                            <img src={cubsImage} className="img-coubs" alt='балткомплект'/>
                            {startContent.title}
                            {startContent.description}
                            <button id="_modal-calculate" className="btn btn__red">Рассчитать перевозку</button>
                            <button
                                id="_modal-text"
                                className="btn btn__blue_border"
                                onClick={() => openModal('modal-callback')}
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