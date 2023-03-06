import React, {useContext, useEffect, useState} from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
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
import {Context} from "../App";
import Admin from "../pages/Administration/Admin";
import Auth from "../pages/Administration/Auth/Auth";
import SettingsAdmin from "../pages/Administration/SettingsAdmin/SettingsAdmin";
import {News} from "./blogComponents/News/News";
import FaqAdmin from "../pages/Administration/FaqAdmin/FaqAdmin";
import NewsAdmin from "../pages/Administration/NewsAdmin/NewsAdmin";
import MaterialsAdmin from "../pages/Administration/MaterialsAdmin/MaterialsAdmin";
import HomeAdmin from "../pages/Administration/HomeAdmin";
import CasesAdmin from "../pages/Administration/CasesAdmin/CasesAdmin";
import Shipping from "../pages/Shipping";
import {ShippingStartSection} from "./sections/ShippingStartSection";
import AirShipping from "./shippingComponents/AirShipping";
import RailwayShipping from "./shippingComponents/RailwayShipping";
import RoadShipping from "./shippingComponents/RoadShipping";
import SeaShipping from "./shippingComponents/SeaShipping";
import MultimodalShipping from "./shippingComponents/MultimodalShipping";
import DangerShipping from "./shippingComponents/DangerShipping";
import Country from "../pages/Country";
import {Services} from "../pages/Services";
import {ServicesSection} from "./sections/ServicesSection";
import ServicesList from "./sections/ServicesList";
import {ParallelImport} from "../pages/ParallelImport";
import PageInterShipping from "../pages/InternationalShipping/PageInterShipping";
import {Financial} from "../pages/Financial";

const AppRouter = () => {
    const {user} = useContext(Context)
    const location = useLocation();

    const [isScrollable, setIsScrollable] = useState(false)

    useEffect(() => {
        window.ym(86927848, 'hit', location.pathname)
    }, [location])

    return <>
            <Routes>
                {
                    user.isAuth &&
                    <Route  key='admin' path='admin/' element={ <Admin/> }>
                        <Route index element={ <HomeAdmin/> } />
                        <Route path='news' element={ <NewsAdmin/> } />
                        <Route path='cases' element={ <CasesAdmin /> } />
                        <Route path='materials' element={ <MaterialsAdmin/> } />
                        <Route path='faq' element={ <FaqAdmin/> } />
                        <Route path='settings' element={ <SettingsAdmin/> } />
                    </Route>
                }

                <Route path='/' element={<Layout location={location} />} >
                    <Route index element={<Home setIsScrollable={setIsScrollable} location={location} />} />
                    <Route path='/about/' element={<About  />} />

                    <Route path='services/' element={<Services location={location} />}>
                        <Route index element={<ServicesList location={location}/>} />
                        <Route path='custom-clearance/' element={
                            <CustomClearance isScrollable={isScrollable} setIsScrollable={setIsScrollable} location={location} />
                        } />
                        <Route path='ved/' element={<VED location={location} />} />
                        <Route path='solutions/' element={<Solutions location={location} />} />
                        <Route path='parallel-import/' element={
                            <ParallelImport isScrollable={isScrollable} setIsScrollable={setIsScrollable} location={location} />
                        } />
                        <Route path='financial-services/' element={<Financial location={location} />} />
                        <Route path='transport-services/' element={<TransportServices location={location} />} />
                            {/*<Route path='aaa' element={<PageInterShipping />} />*/}
                        {/*</Route>*/}
                    </Route>
                    <Route path='blog/' element={<Blog location={location}/>} >
                        <Route index element={<BlogSection location={location}/>} />
                        <Route path='materials/' element={ <Materials location={location} /> }/>
                        <Route path='cases/' element={ <Cases location={location} /> }/>
                        <Route path='FAQ/' element={<FAQ location={location} />}/>
                        <Route path='news/' element={<News location={location} />}/>
                    </Route>

                </Route>

                <Route path='contacts' element={<Contacts />} />

                <Route key='login' path='login' element={<Auth />}/>

                <Route path='404' element={<NotFound />}  />
                <Route path='*' element={<Navigate to='404'/> } />
            </Routes>
            <Modal />
    </>
};

export default AppRouter;

{/*    <Route index element={<ShippingStartSection />} />*/}
{/*    <Route path='air-shipping/' element={<AirShipping/>} />*/}
{/*    <Route path='railway-shipping/' element={<RailwayShipping/>} />*/}
{/*    <Route path='road-shipping/' element={<RoadShipping />} />*/}
{/*    <Route path='sea-shipping/' element={<SeaShipping />} />*/}
{/*    <Route path='multimodal-shipping/' element={<MultimodalShipping />} />*/}
{/*    <Route path='dangerous-shipping/' element={<DangerShipping/>} />*/}
{/*</Route>*/}

{/*<Route path='countries/:url' element={<Country />} />*/}
{/*<Route path='shipping/' element={<Shipping />}>*/}
{/*    <Route index element={<ShippingStartSection />} />*/}
{/*    <Route path='air-shipping/' element={<AirShipping/>} />*/}
{/*    <Route path='railway-shipping/' element={<RailwayShipping/>} />*/}
{/*    <Route path='road-shipping/' element={<RoadShipping />} />*/}
{/*    <Route path='sea-shipping/' element={<SeaShipping />} />*/}
{/*    <Route path='multimodal-shipping/' element={<MultimodalShipping />} />*/}
{/*    <Route path='dangerous-shipping/' element={<DangerShipping/>} />*/}
{/*</Route>*/}