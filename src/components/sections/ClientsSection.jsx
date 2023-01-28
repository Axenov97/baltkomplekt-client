import orgstroy from "../../img/clients/orgstroy.svg"
import kirovsky from "../../img/clients/kirovsky.svg"
import line_music from "../../img/clients/line_music.svg"
import sherp from "../../img/clients/sherp.svg"
import minterhim from "../../img/clients/minterhim.svg"
import IPG from "../../img/clients/IPG.svg"
import MACT from "../../img/clients/MACT.svg"
import PSG from "../../img/clients/PSG.svg"
import PROGLASS from "../../img/clients/PROGLASS.svg"
import sterningr from "../../img/clients/sterningr.svg"
import razvitie from "../../img/clients/razvitie.svg"
import aquatoria from "../../img/clients/aquatoria.svg"
import murmansk from "../../img/clients/murmansk.svg"

import {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/modules/pagination/pagination.scss';

function ClientsSection(){
    return <section className="clients">
        <div className="container">
            <h2>Наши клиенты</h2>
            <button id="swiperPrev" className='swiper-prev' />
            <button id="swiperNext" className='swiper-next' />

            <Swiper
                className="clients__swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation={{
                    prevEl: "#swiperPrev",
                    nextEl: "#swiperNext"
                }}
                pagination={{
                    clickable: true,
                    el: "#swiperPagination"
                }}
                breakpoints={{
                    '100': {
                        'slidesPerView': 1,
                        'slidesPerGroup': 1,
                        'spaceBetween': 30,
                        'centeredSlides': true
                    },
                    '750': {
                        'slidesPerView': 2,
                        'slidesPerGroup': 2,
                        'spaceBetween': 20,
                        'centeredSlides': false
                    },
                    '900': {
                        'slidesPerView': 3,
                        'slidesPerGroup': 1,
                        'spaceBetween': 50,
                        'centeredSlides': true
                    },
                    '1200': {
                        'slidesPerView': 3,
                        'slidesPerGroup': 1,
                        'spaceBetween': 50,
                        'centeredSlides': true
                    }
                }}
            >
                <SwiperSlide className="client"><img src={orgstroy} alt="Оргэнэргострой"/></SwiperSlide>
                <SwiperSlide className="client"><img src={kirovsky} alt="Кировский завод"/></SwiperSlide>
                <SwiperSlide className="client"><img src={line_music} alt="Line music"/></SwiperSlide>
                <SwiperSlide className="client"><img src={sherp} alt="шерп"/></SwiperSlide>
                <SwiperSlide className="client"><img src={minterhim} alt="Минтерхим"/></SwiperSlide>
                <SwiperSlide className="client"><img src={IPG} alt="IPG"/></SwiperSlide>
                <SwiperSlide className="client"><img src={MACT} alt="MACT"/></SwiperSlide>
                <SwiperSlide className="client"><img src={PSG} alt="PSG"/></SwiperSlide>
                <SwiperSlide className="client"><img src={PROGLASS} alt="ProGlass"/></SwiperSlide>
                <SwiperSlide className="client"><img src={sterningr} alt="Stern Ingridients"/></SwiperSlide>
                <SwiperSlide className="client"><img src={razvitie} alt="Ингридиенты развитие"/></SwiperSlide>
                <SwiperSlide className="client"><img src={aquatoria} alt="Акватория"/></SwiperSlide>
                <SwiperSlide className="client"><img src={murmansk} alt="Мурманский тарный комбинат"/></SwiperSlide>
                <div id="swiperPagination" className='swiper-dots'/>
            </Swiper>
        </div>
    </section>
}
export {ClientsSection}