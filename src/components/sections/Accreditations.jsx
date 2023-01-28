import React from 'react';
import FTS from './../../img/accredit/FTS.svg'
import dP from './../../img/accredit/delPiter.svg'
import germes from './../../img/accredit/germes.svg'
import translog from './../../img/accredit/translog.svg'
import RBK from './../../img/accredit/RBK.svg'
import SevZap from './../../img/accredit/SevZap.svg'

const Accreditations = () => {
    return <div className='accreditations'>
        <div className="container flex-container">
            <h2>Наши аккредитации</h2>
            <div className="accreditations__block">
                <div className="accreditations__block_image">
                    <img src={FTS} alt="Федеральная таможенная служба"/>
                </div>
                <div className="accreditations__block_description">
                    <p>«Балткомплект» осуществляет таможенноую деятельность согласно правилам и нормам, установленными Федеральной таможенной службой.</p>
                    <a target='_blank' href="https://customs.gov.ru/Structure/pravovye-osnovy-deyatel-nosti">
                        Подробнее на сайте Федеральной таможенной службы <br/>
                    </a>
                </div>
            </div>
            <div className="accreditations__block">
                <div className="accreditations__block_image">
                    <img src={germes} alt="Гермес"/>
                </div>
                <div className="accreditations__block_description">
                    <p>С ноября 2010 года Балткомплект вошел в состав «Гильдии профессиональных участников рынка оказания услуг в области таможенного дела и внешнеэкономической деятельности "ГЕРМЕС"».</p>
                    <a target='_blank' href="https://rus-ved.ru/">
                        Подробнее: Региональная Ассоциация таможенных представителей
                    </a>
                </div>
            </div>
            <div className="accreditations__block">
                <div className="accreditations__block_image">
                    <img src={SevZap} alt="Ассоциация таможенных представителей «Северо-Запад»."/>
                </div>
                <div className="accreditations__block_description">
                    <p>В 2003 г. «Балткомплект» получил статус Действительного члена Региональной Ассоциации таможенных представителей «Северо-Запад».</p>
                    <a target='_blank' href="https://ratb-sz.ru/about.shtml?members">
                        Подробнее: Региональная Ассоциация таможенных представителей
                    </a>
                </div>
            </div>
            <div className="accreditations__block">
                <div className="accreditations__block_image">
                    <img src={translog} alt="Транслогистик"/>
                </div>
                <div className="accreditations__block_description">
                    <p>Все дочерние компании ГК «Балткомплект» аккредитованы, а также ООО «Транслогистик» внесена в реестр таможенных представителей Российской Федерации.
                        Номер регистрации в реестре таможенных представителей: 1494</p>
                    <a target='_blank' href="https://translogistik.spb.ru/">
                        Официальный сайт
                    </a>
                </div>
            </div>

            <h2>Упоминания о нас</h2>
            <div className="accreditations__block">
                <div className="accreditations__block_image">
                    <img src={dP} alt="Деловой Петербург"/>
                </div>
                <div className="accreditations__block_description">
                    <h4>Балткомплект. Таможенное оформление грузов</h4>
                    <p>Основное направление деятельности - таможенное оформление и экспедирование грузов. Центральный офис находится в Санкт-...</p>
                    <a target='_blank' href="https://whoiswho.dp.ru/cart/company/3239198">
                        Подробнее на Деловой Петербург
                    </a>
                </div>
            </div>
            <div className="accreditations__block">
                <div className="accreditations__block_image">
                    <img src={RBK} alt="РБК"/>
                </div>
                <div className="accreditations__block_description">
                    <h4>Исследование РБК: как хоккеисты-любители построили целую индустрию</h4>
                    <p>Энтузиасты, в том числе из бизнеса, создали организм, способный...</p>
                    <a target='_blank' href="https://www.rbc.ru/spb_sz/31/05/2018/5b0d531d9a79473ae0064a29">
                        Подробнее на РБК
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default Accreditations;