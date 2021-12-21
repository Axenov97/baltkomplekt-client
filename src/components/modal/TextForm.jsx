import bg from "../../img/modal/modalText/bg.svg"
import {ModalContext} from "../../context";
import {useContext} from 'react'

function TextForm() {
    const {form} = useContext(ModalContext)

    return <div className={form === 'modal-text' ? "modal-content modal-text active" : "modal-content modal-text"}>
        <h3>Оставьте заявку на расчет полной <br/> комплексной стоимости</h3>
        <div className="modal-text__bg">
            <img src={bg} alt='балткомплект'/>
        </div>
        <form className="form-start">
            <div className="form-start__content">
                <div className="form-group">
                    <span className="preText">Имя</span>
                    <input required type="text" className="form-control-start" name="Имя" placeholder="Василий" />
                    <span className="preText">Почта</span>
                    <input required type="text" className="form-control-start" name="Почта" placeholder="Ваш почтовый адрес" />
                    <span className="preText">Телефон</span>
                    <input required type="tel" data-tel-input className="form-control-start"
                           name="Телефон" placeholder="+7 (XXX) xxx xx-xx" maxLength="18" />
                    <span className="preText">Ваш запрос</span>
                    <textarea required type="text" className="form-control-start" name="Сообщение"
                              placeholder="Пожалуйста, подробно опишите ваш запрос" />
                </div>
            </div>
            <button type="submit" className="btn modal-btn">Оставить заявку</button>
            <div className="btn__after_text">
                <span>Нажимая нопку “Оставить заявку”, вы соглашаетесь<br/> с политикой конфиденциальности</span>
            </div>
        </form>
        <div className="modal-text__content">
            <h2>Обязательно укажите в запросе</h2>
            <p>
                - Описание груза<br/>
                - Упаковочный лист или инвойс,<br/>
                - Укажите коды ТН ВЭД ваших товаров;<br/>
                - Маршруты (пункты отправления и доставки);<br/>
                - Условия контракта.<br/>
                <br/>
                После того, как запрос будет обработан нашими менеджерами, мы информируем вас о стоимости наших
                услуг по транспортировке и таможенному оформлению вашего груза.
            </p>
        </div>
    </div>
}
export {TextForm}