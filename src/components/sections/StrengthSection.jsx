import strength from '../../img/strength.svg'
import {ModalContext} from "../../context";
import {useContext} from 'react'
import {sendYandexMetrik} from "../../utils/metriks";

function StrengthSection(){
    const {openModal} = useContext(ModalContext)

    return <>
        <img className="strength__bg" src={strength} alt='балткомплект'/>

        <section className="strength__section">
            <div className="container">
                <h2>Наши сильные стороны</h2>

                <div className="flex-container">
                    <div className="strength__content">
                        <div className="strength__content_elem">
                            <h3>Низкие цены на услуги</h3>
                            <p>Объемы позволяют нам найти наиболее экономичный и эффективный способ реализации вашего
                                запроса в любой из сфер таможенного сопровождения</p>
                        </div>
                        <div className="strength__content_elem">
                            <h3>Клиентоориентированность</h3>
                            <p>Наши менеджеры профессионалы и всегда на связи. Подробно опишут зачем нужны те
                                или иные затраты и помогут, как с перевозкой сложных грузов, так и с таможенным оформлением.</p>
                        </div>
                        <div className="strength__content_elem">
                            <h3>Индивидуальный подход </h3>
                            <p>У каждого нашего клиента есть личный менеджер, который всегда на связи и контролирует весь
                                процесс таможенного сопровождения</p>
                        </div>
                        <div className="strength__content_elem">
                            <h3>Оперативность всех работ</h3>
                            <p>Выпуск деклараций в день подачи. Помощь в подготовке всей документации. Работаем 24/7.</p>
                        </div>
                    </div>
                    <div className="strength__form">
                        <div className="form">
                            <h3>Оставьте заявку на расчет полной комплексной стоимости</h3>
                            <p>Обязательно укажите в запросе:
                                <br/>- Описание груза
                                <br/>- Упаковочный лист или инвойс,
                                <br/>- Укажите коды ТН ВЭД ваших товаров;
                                <br/>- Маршруты (пункты отправления и доставки);
                                <br/>- Условия контракта.
                            </p>
                            <p> После того, как запрос будет обработан нашими менеджерами, мы проинформируем вас о стоимости
                                наших услуг по транспортировке и таможенному оформлению вашего груза.</p>

                            <button
                                id="_modal-text"
                                className="btn"
                                onClick={()=>{
                                    openModal('modal-text')
                                    sendYandexMetrik('reachGoal','ButtonZayavka')
                                }}>
                                    Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
}
export {StrengthSection}