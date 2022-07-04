import React, {useState, useContext} from 'react';
import './auth.scss'
import {login} from "../../../http/UserAPI";
import {Context} from "../../../App";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../../../utils/consts";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [textLogin, setTextLogin] = useState('')
    const [password, setPassword] = useState('')
    const [checkAuth, setCheckAuth] = useState(false)

    const signIn = async ()=> {
        try {
            await login(textLogin, password);
            user.setUser(user)
            user.setIsAuth(true)
            localStorage.setItem('nameLogin', textLogin)
            localStorage.setItem('pass', password)
            navigate(ADMIN_ROUTE)
        } catch (e) {
            setCheckAuth(true)
        }
    }

    return <div className='auth-container container'>
        <div className='flex-container '>
            <h5>Вход в панель управления</h5>
            <p style={checkAuth ? {display: 'block'} : {display: 'none'} }>Неправильный логин или пароль</p>
            <input type="text" placeholder='Логин*' className='login' value={textLogin} onChange={e => setTextLogin(e.target.value)}/>
            <input type="password" placeholder='Пароль*' className='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button className='auth-btn' type='submit' onClick={signIn}>Войти</button>
        </div>
    </div>
});

export default Auth;