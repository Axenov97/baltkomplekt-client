import React from 'react';
import {useNavigate} from "react-router-dom";
import SeoRight from "./SeoRight";
import gerb from './../../img/mini-gerb.svg'

const SEOParallelSection = ({setIsScrollable}) => {
    const navigator = useNavigate()

    return (
        <div className='seo-section'>
            <div className="container">
                <div className="flex-container">
                    <div className="seo-left">
                        <h2>Что такое параллельный импорт?</h2>
                        <p>
                            Параллельный импорт — ввоз в страну товаров без согласия производителя или правообладателя,
                            обычно одновременно (параллельно) с ввозом через официальных дилеров.
                        </p>
                        <p>
                            Приказ действует в России с 30 марта 2022-го, когда правительство разрешило этот механизм по отдельным категориям товаров.
                            Данное решение позволит снизить рост цен на импортируемые товары и избежать дефицита в условиях санкций.
                        </p>
                        <p>
                            Минпромторг утвердил перечень товаров, разрешенных для параллельного импорта.
                            Всего список содержит 56 пунктов.
                            Среди них, в частности, звукозаписывающая аппаратура, фото- и кинотехника, медицинские инструменты,
                            музыкальные инструменты, бытовая техника (Electrolux, Miele, Siemens, Dyson, Philips),
                            косметические компоненты, одежда и обувь, а также автомобили (Bentley, Cadillac, Land Rover, Jaguar и другие)
                            и запчасти к ним (в том числе шины Michelin, Goodyear, Continental, Bridgestone).
                        </p>
                        <p>Ознакомиться с полным перечнем продукции, разрешенной к параллельному импорту:</p>

                        <a href='http://publication.pravo.gov.ru/Document/View/0001202205060001' target='_blank' className='btn btn__custom'>
                            <img src={gerb} />
                            <div className="text">
                                <p>Смотреть схемы поставок</p>
                                <span>“Официальный интернет-портал правовой информации”</span>
                            </div>
                        </a>

                        <p>Наша компания быстро адаптировалась к изменениям и мы уже работаем по всем 56-и
                            пунктам перечня с нашими клиентами по одной из 4 схем работы,
                            разработанной нашей компанией для минимизации рисков, быстрой и эффективной доставке.
                        </p>
                        <p>Ознакомиться с основными схемами поставок можно по ссылке:</p>
                        <button
                            className='btn btn__black'
                            onClick={()=>{
                                setIsScrollable(true)
                            }}
                        >
                            Смотреть схемы поставок
                        </button>
                        <button
                            className='btn btn__black_border'
                            onClick={()=>navigator('/contacts/')}
                        >
                            Связаться с нами
                        </button>
                    </div>
                    <SeoRight />
                </div>
            </div>
        </div>
    );
};

export default SEOParallelSection;