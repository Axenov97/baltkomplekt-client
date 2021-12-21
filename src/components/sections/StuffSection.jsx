import {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

import malkova from '../../img/stuff/malkova.webp'
import Klokov from '../../img/stuff/Klokov.webp'
import Malanchuk from '../../img/stuff/Malanchuk.webp'
import Matveev from '../../img/stuff/Matveev.webp'
import Nebogov from '../../img/stuff/Nebogov.webp'
import Nikitin from '../../img/stuff/Nikitin.webp'

function StuffSection(){
    return <section className="stuff__section">
        <div className="container">
            <h2 className="blue__head">Наши специалисты</h2>
            <button id="swiperPrevStuff" className='swiper-prev' />
            <button id="swiperNextStuff" className='swiper-next' />
            <Swiper
                className="stuff__swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                navigation={{
                    prevEl: "#swiperPrevStuff",
                    nextEl: "#swiperNextStuff"
                }}
                pagination={{
                    clickable: true,
                    el: "#swiperPaginationStuff"
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
                        'spaceBetween': 15,
                        'centeredSlides': true
                    },
                    '1200': {
                        'slidesPerView': 4,
                        'slidesPerGroup': 1,
                        'spaceBetween': 20,
                        'centeredSlides': true
                    }
                }}
            >
                <SwiperSlide className="stuff__elem">
                    <img src={malkova} alt='Малкова Анна Александровна'/>
                     <h3>Малкова Анна Александровна</h3>
                     <p>Менеджер по ВЭД</p>
                     <a href="tel:+7 812 718-69-70 (224)">+7 812 718-69-70 (224)</a>
                </SwiperSlide>
                <SwiperSlide className="stuff__elem">
                    <img src={Klokov} alt='Клоков Александр Сергеевич'/>
                     <h3>Клоков Александр Сергеевич</h3>
                     <p>Менеджер по ВЭД</p>
                     <a href="tel:+7 812 718-69-70 (202)">+7 812 718-69-70 (202)</a>
                </SwiperSlide>
                <SwiperSlide className="stuff__elem">
                    <img src={Malanchuk} alt='Маланчук Александр Васильевич'/>
                     <h3>Маланчук Александр Васильевич</h3>
                     <p>Компаньон ООО «Вираж-логистика»</p>
                     <a href="mailto:logist1@virazh-logistika.com">logist1@virazh-logistika.com</a>
                </SwiperSlide>
                <SwiperSlide className="stuff__elem">
                    <img src={Matveev} alt='Матвеев Артем Владимирович'/>
                    <h3>Матвеев Артем Владимирович</h3>
                    <p>+7 812 718-69-70 (246)</p>
                    <a href="tel:+7 911 285-46-94">+7 911 285-46-94</a>
                </SwiperSlide>
                <SwiperSlide className="stuff__elem">
                    <img src={Nebogov} alt='Небогов Николай Николаевич'/>
                    <h3>Небогов Николай Николаевич</h3>
                    <p>Менеджер по ВЭД</p>
                    <a href="tel:+7 812 718-69-70 (219)">+7 812 718-69-70 (219)</a>
                </SwiperSlide>
                <SwiperSlide className="stuff__elem">
                    <img src={Nikitin} alt='Никитин Кирилл Петрович'/>
                    <h3>Никитин Кирилл Петрович</h3>
                    <p>Начальник отдела по работе с клиентами</p>
                    <a href="tel:+7 812 718-69-70 (210)">+7 812 718-69-70 (210)</a>
                </SwiperSlide>
            </Swiper>
            <div id="swiperPaginationStuff" className='swiper-dots' />
        </div>
    </section>
}
export {StuffSection}