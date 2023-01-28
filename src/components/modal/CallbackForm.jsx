// import bg from "../../img/modal/callback/bg.svg"
// import tablet_bg from "../../img/modal/callback/tablet_bg.svg"
import React, {useContext, useEffect, useState} from "react";
import {ModalContext} from "../../context";
import {sendMail} from "../../http/SendMailAPI";

function CallbackForm() {
    const { form, content, error, setFormContent, closeModal } = useContext(ModalContext)
    const [dirtyName, setDirtyName] = useState(false)
    const [dirtyPhone, setDirtyPhone] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
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

    const phoneHandler = (e) => {
        setFormContent({...content, phone: e.target.value.replace(/\D/g, '')})
        error.phone = e.target.value.length <= 5;
    }

    const sendHandler = async (e) => {
        e.preventDefault()
        try {
            let isAdmin = window.confirm("Отправить заявку?")
            if (isAdmin) {
                await sendMail(content.name, '', content.phone, content.text, 'Перезвонить')
            }
        } catch (error) {
            // console.error(error)
        }
        closeModal(form)
    }

    const [validate, setValidate] = useState(true)

    useEffect(()=> {
        if (!error.name && !error.phone) {
            setValidate(false)
        } else {
            setValidate(true)
        }
    },[error.name, error.phone])

    return <div className={form === 'modal-callback' ? "modal-content modal-callback active" : "modal-content modal-callback"}>
        <h3>Перезвоните мне</h3>
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
                        type="text"
                        className="form-control-start"
                        name="Имя"
                        placeholder="Имя"
                        value={content.name}
                        onBlur={e => blurHandler(e)}
                        onChange={e => nameHandler(e)}
                    />
                    {dirtyPhone && error.phone ?
                        <span className="errorText">Поле Телефон обязательно к заполнению</span>
                        :
                        null
                    }
                    <input
                        style={dirtyPhone && error.phone ? {border: '1px solid #ff000055'} : null}
                        type="tel"
                        data-tel-input={true}
                        className="form-control-start phone-input"
                        name="Телефон"
                        placeholder="Телефон"
                        maxLength="18"
                        value={content.phone}
                        onBlur={e => blurHandler(e)}
                        onChange={e => phoneHandler(e)}
                    />
                </div>
            </div>
            <button
                type="submit"
                className="btn modal-btn"
                disabled={validate}
                onClick={sendHandler}
            >
                Перезвонить
            </button>
            <div className="btn__after_text">
                <span>Нажимая нопку “Оставить заявку”, вы соглашаетесь с политикой конфиденциальности</span>
            </div>
        </form>
    </div>
}
export {CallbackForm}