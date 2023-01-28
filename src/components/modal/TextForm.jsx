// import bg from "../../img/modal/modalText/bg.svg"
import {ModalContext} from "../../context";
import React, {useContext, useEffect, useState} from 'react'
import {sendMail} from "../../http/SendMailAPI";

function TextForm() {
    const { form, content, error, setFormContent, closeModal } = useContext(ModalContext)
    const [dirtyName, setDirtyName] = useState(false)
    const [dirtyEmail, setDirtyEmail] = useState(false)
    const [dirtyPhone, setDirtyPhone] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email': setDirtyEmail(true)
                break
            case 'name': setDirtyName(true)
                break
            case 'phone': setDirtyPhone(true)
                break
        }
    }

    const nameHandler = (e) => {
        setFormContent({...content, name: e.target.value})
        error.name = e.target.value.length <= 0;
    }

    const emailHandler = (e) =>{
        setFormContent({...content, email: e.target.value})
        const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        error.email = !emailReg.test(String(e.target.value).toLowerCase());
    }

    const phoneHandler = (e) => {
        setFormContent({...content, phone: e.target.value.replace(/\D/g, '')})
        error.phone = e.target.value.length <= 5;
    }

    const sendHandler = async (e) => {
        e.preventDefault()
        try {
            let isAdmin = window.confirm("Отправить заявку?")
            if (isAdmin) {
                await sendMail(content.name, content.email, content.phone, content.text, 'Оставить заявку')
            }
        } catch (error) {
            // console.error(error)
        }
        closeModal(form)
    }

    const [validate, setValidate] = useState(true)

    useEffect(()=> {
        if (!error.name && !error.email && !error.phone) {
            setValidate(false)
        } else {
            setValidate(true)
        }
    },[error.name, error.email, error.phone])

    return <div className={form === 'modal-text' ? "modal-content modal-text active" : "modal-content modal-text"}>
        <h3>Оставьте заявку на расчет полной комплексной стоимости</h3>
        <div className="alarms">
            <div className='alarm'>
                <p>Только юридические лица</p>
            </div>
        </div>
        <form className="form-start">
            <div className="form-start__content">
                <div className="form-group">
                    {dirtyName && error.name ?
                        <span className="errorText">Поле ИМЯ обязательно к заполнению</span>
                        :
                        null
                    }
                    <input
                        style={dirtyName && error.name ? {border: '1px solid #ff000055'} : null}
                        required
                        type="text"
                        className="form-control-start"
                        name="name"
                        placeholder="Имя"
                        value={content.name}
                        onBlur={e => blurHandler(e)}
                        onChange={e => nameHandler(e)}
                    />
                    {dirtyEmail && error.email ?
                        <span className="errorText">Поле Почта обязательно к заполнению</span>
                        :
                        null
                    }
                    <input
                        style={dirtyEmail && error.email ? {border: '1px solid #ff000055'} : null}
                        required
                        type="text"
                        className="form-control-start"
                        name="email"
                        placeholder="Почта"
                        value={content.email}
                        onBlur={e => blurHandler(e)}
                        onChange={e => emailHandler(e)}
                    />
                    {dirtyPhone && error.phone ?
                        <span className="errorText">Поле Телефон обязательно к заполнению</span>
                        :
                        null
                    }
                    <input
                        style={dirtyPhone && error.phone ? {border: '1px solid #ff000055'} : null}
                        required
                        type="tel"
                        data-tel-input={true}
                        className="form-control-start"
                        name="phone"
                        placeholder="Телефон"
                        maxLength="18"
                        value={content.phone}
                        onBlur={e => blurHandler(e)}
                        onChange={e => phoneHandler(e)}
                    />
                    <textarea
                        required
                        type="text"
                        className="form-control-start"
                        name="Сообщение"
                        placeholder="Пожалуйста, подробно опишите ваш запрос"
                        value={content.text}
                        onChange={e => setFormContent({...content, text: e.target.value})}
                    />
                </div>
            </div>
            <button
                type="submit"
                disabled={validate}
                className="btn modal-btn btn__white"
                onClick={sendHandler}
            >
                Оставить заявку
            </button>
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