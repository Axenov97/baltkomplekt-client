import React, {useContext} from 'react';
import {sendYandexMetrik} from "../../utils/metriks";
import {ModalContext} from "../../context";

const SeoRight = () => {
    const {openModal} = useContext(ModalContext)

    return <div className="seo-right">
        <div className="seo-right__item">
            <h3>Оставьте заявку на расчет полной комплексной стоимости</h3>
            <p>Обязательно укажите в запросе:</p>
            <li>Описание груза</li>
            <li>Упаковочный лист или инвойс,</li>
            <li>Укажите коды ТН ВЭД ваших товаров;</li>
            <li>Маршруты (пункты отправления и доставки);</li>
            <li>Условия контракта.</li>
            <p>
                После того, как запрос будет обработан нашими менеджерами,
                мы информируем вас о стоимости наших услуг по транспортировке
                и таможенному оформлению вашего груза.
            </p>
            <button className='btn btn__black_border'
                    onClick={() => {
                        openModal('modal-text')
                        sendYandexMetrik('reachGoal','ButtonZayavka')
                    }}>
                Оставить заявку
            </button>
        </div>
    </div>
};

export default SeoRight;