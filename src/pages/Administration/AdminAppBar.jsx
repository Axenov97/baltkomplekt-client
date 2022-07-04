import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import './admin.scss'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Context} from "../../App";
import {LOGIN_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";


const AdminAppBar = observer((props) => {
    const {openBar, setOpenBar} = props
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
        localStorage.clear()
    }
    return (
        <div className='admin-app__bar'>
            <ul className='admin-app__list'>
                <button onClick={()=>setOpenBar(!openBar)} className='menu-button'>
                    {openBar ? <MenuOpenIcon /> : <MenuIcon />}
                </button>
                <NavLink to='news'>{openBar ? 'Новости' : <NewspaperIcon/>}</NavLink>
                <NavLink to='cases'>{openBar ? 'Кейсы' : <WorkIcon/>}</NavLink>
                <NavLink to='materials'>{openBar ? 'Справочные материалы' : <ArticleIcon/>}</NavLink>
                <NavLink to='faq'>{openBar ? 'FAQ' : <QuizIcon/> }</NavLink>
            </ul>
            <ul className='admin-app__list bottom-list'>
                <NavLink to='settings'>{openBar ? 'Настройки' : <SettingsIcon/>}</NavLink>
                <p onClick={()=>logOut()}>{openBar ? 'Выход' : <LogoutIcon/>}</p>
            </ul>
        </div>
    );
});

export default AdminAppBar;