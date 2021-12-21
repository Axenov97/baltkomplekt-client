import React, {useContext, useEffect, useState} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import {Layout} from "./Layout";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Contacts} from "../pages/Contacts";
import {Blog} from "../pages/Blog";
import {CustomClearance} from "../pages/CustomClearance";
import {TransportServices} from "../pages/TransportServices";
import {VED} from "../pages/VED";
import {Solutions} from "../pages/Solutions";
import {NotFound} from "../pages/NotFound";
import {BlogSection} from "./blogComponents/BlogSection";
import {Materials} from "./blogComponents/Materials/Materials";
import {Cases} from "./blogComponents/Cases/Cases";
import {FAQ} from "./blogComponents/FAQ/FAQ";
import {Modal} from "./modal/Modal";
import {Context} from "../index";
import Admin from "../pages/Administration/Admin";
import Auth from "../pages/Administration/Auth/Auth";
import SettingsAdmin from "../pages/Administration/SettingsAdmin/SettingsAdmin";
import {News} from "./blogComponents/News/News";
import FaqAdmin from "../pages/Administration/FaqAdmin/FaqAdmin";
import NewsAdmin from "../pages/Administration/NewsAdmin/NewsAdmin";
import MaterialsAdmin from "../pages/Administration/MaterialsAdmin/MaterialsAdmin";
import HomeAdmin from "../pages/Administration/HomeAdmin";
import CasesAdmin from "../pages/Administration/CasesAdmin/CasesAdmin";

const AppRouter = () => {
    const {user} = useContext(Context)
    const [blogPage, setBlogPage] = useState('Блог')
    const location = useLocation();

    useEffect(() => {
        window.ym(86927848, 'hit', location.pathname)
    }, [location])

    return <>
        <Routes>
            { user.isAuth && <Route  key='admin' path='admin/' element={ <Admin/> }>
                    <Route index element={ <HomeAdmin/> } />
                    <Route path='news' element={ <NewsAdmin/> } />
                    <Route path='cases' element={ <CasesAdmin /> } />
                    <Route path='materials' element={ <MaterialsAdmin/> } />
                    <Route path='faq' element={ <FaqAdmin/> } />
                    <Route path='settings' element={ <SettingsAdmin/> } />
                </Route> }

            <Route path='/' element={<Layout location={location} />} >
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='services/custom-clearance' element={<CustomClearance/>} />
                <Route path='services/transport-services' element={<TransportServices/>} />
                <Route path='services/ved' element={<VED/>} />
                <Route path='services/solutions' element={<Solutions/>} />
            </Route>

            <Route path='blog/' element={<Blog location={location} blogPage={blogPage} setBlogPage={setBlogPage}/>} >
                <Route index element={<BlogSection />} />
                <Route path='materials' element={ <Materials setBlogPage={setBlogPage} /> }/>
                <Route path='cases' element={ <Cases setBlogPage={setBlogPage}/> }/>
                <Route path='FAQ' element={<FAQ setBlogPage={setBlogPage}/>}/>
                <Route path='news' element={<News setBlogPage={setBlogPage}/>}/>
            </Route>

            <Route path='contacts' element={<Contacts />} />

            <Route key='login' path='login' element={<Auth />}/>

            <Route path='*' element={<NotFound />} />
        </Routes>
        <Modal />
    </>
};

export default AppRouter;