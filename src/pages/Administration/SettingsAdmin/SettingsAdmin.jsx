import React, {useContext, useState} from 'react';
import '../admin.scss'
import './settings.scss'
import {Context} from "../../../index";
import {changePassword} from "../../../http/UserAPI";
import {LOGIN_ROUTE} from "../../../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const SettingsAdmin = observer(() => {
    const navigate = useNavigate()
    const localPass = localStorage.getItem('pass')
    const {user} = useContext(Context)
    const userName = localStorage.getItem('nameLogin')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [oldPassCheck, setOldPassCheck] = useState(false)

    const changePass = async ()=> {
        if (oldPassword === localPass){
            try {
                await changePassword(userName, newPassword)
                alert('пароль успешно изменен')
                user.setUser({})
                user.setIsAuth(false)
                navigate(LOGIN_ROUTE)
                localStorage.clear()
            } catch (e) {
                alert('ошибка в новом пароле или имени')
            }
        } else {
            setOldPassCheck(true)
        }
    }

    return (
        <>
            <h5>Настройки</h5>
            <div className="admin-list">
                <h4>Изменить пароль</h4>
                <div className="change-pass__group">
                    <p style={oldPassCheck ? {display: 'block'} : {display: 'none'}}>Некорректно введен старый пароль</p>
                    <input
                        className={oldPassCheck ? 'pass-input error-input' : 'pass-input'}
                        type="password"
                        placeholder='Введите старый пароль'
                        onChange={e=>setOldPassword(e.target.value)}
                        value={oldPassword}
                    />
                    <input
                        type="password"
                        placeholder='Введите новый пароль'
                        onChange={e=>setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                    <button
                        className='admin__btn'
                        onClick={changePass}
                    >
                        Изменить пароль
                    </button>
                </div>
            </div>
        </>
    );
});

export default SettingsAdmin;