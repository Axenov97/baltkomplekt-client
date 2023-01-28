import React from 'react';
import {useNavigate} from "react-router-dom";
import SeoRight from "./SeoRight";

const SEOTransportSection = () => {
    const navigator = useNavigate()

    return (
        <div className='seo-section'>
            <div className="container">
                <div className="flex-container">
                    <div className="seo-left">
                        <h2>Международные контейнерные перевозки</h2>
                        <p>
                            Международные контейнерные перевозки – это популярный вид грузоперевозок,
                            который используют для доставки различных категорий товаров.
                        </p>
                        <p>
                            Наша компания осуществляет все виды контейнерных перевозок:
                            международные перевозки контейнеров по морю, железной дороге, по воздуху и автомобилями.
                            Мы оказываем полный комплекс услуг: организуем погрузочно-разгрузочные работы,
                            выполним доставку от и до порта отгрузки, таможенное оформление товара в кратчайшие сроки,
                            поможем со страхованием товара, составим оптимальный маршрут.
                        </p>
                        <p>
                            В современных условиях мы быстро адаптировались к изменениям в международной логистике и,
                            в условиях санкций, предоставляем услуги по регулярной доставке грузов контейнерами нашим клиентам по всей России.
                        </p>
                        <p>Ознакомиться с основными схемами поставок можно по ссылке:</p>
                        <button className='btn btn__black'>Смотреть схемы поставок</button>
                        <button className='btn btn__black_border' onClick={()=>navigator('/contacts/')}>Связаться с нами</button>
                    </div>
                    <SeoRight />
                </div>
            </div>
        </div>
    );
};

export default SEOTransportSection;