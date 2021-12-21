import React, {useState} from 'react';
import './admin.scss'
import AdminAppBar from "./AdminAppBar";
import {Outlet} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    const [openBar, setOpenBar] = useState(false)
    const userName = localStorage.getItem('nameLogin')

    return (
        <div className={openBar ? 'admin active' : 'admin'}>
            <AdminAppBar openBar={openBar} setOpenBar={setOpenBar}/>
            <div className='admin-container'>
                <div className='flex-container'>
                    <h1>{userName}</h1>
                    <Outlet />
                </div>
            </div>
        </div>
    );
});

export default Admin;