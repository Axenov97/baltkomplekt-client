import bg from "../../img/modal/callback/bg.svg"
import tablet_bg from "../../img/modal/callback/tablet_bg.svg"
import {useContext} from "react";
import {ModalContext} from "../../context";

function CallbackForm() {
    const {form} = useContext(ModalContext)

    return <div className={form === 'modal-callback' ? "modal-content modal-callback active" : "modal-content modal-callback"}>
        <h3>Персональная консультация</h3>
        <div className="tablet-bg">
            <img src={tablet_bg} alt='балткомплект' />
        </div>
        <div className="callback__bg">
            <img src={bg} alt='балткомплект'/>
        </div>
        <form className="form-start">
            <div className="form-start__content">
                <div className="form-group">
                    <span className="preText">Имя</span>
                    <input type="text" className="form-control-start" name="Имя" placeholder="Василий" />
                    <span className="preText">Телефон</span>
                    <input type="tel" data-tel-input className="form-control-start" name="Телефон"
                           placeholder="+7 (999) 999 99-99" maxLength="18" />
                    <span className="preText">Ваш запрос</span>
                    <textarea type="text" className="form-control-start" name="Сообщение"
                              placeholder="Пожалуйста, подробно опишите ваш запрос" />
                </div>
            </div>
            <button type="submit" className="btn modal-btn">Перезвонить</button>
            <div className="btn__after_text">
                <span>Нажимая нопку “Оставить заявку”, вы соглашаетесь<br/> с политикой конфиденциальности</span>
            </div>
        </form>
    </div>
}
export {CallbackForm}