import React, {useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getCountries} from "../data";
import {sendYandexMetrik} from "../utils/metriks";
import {ModalContext} from "../context";
import {AboutUsSection} from "../components/sections/AboutUsSection";

const Country = () => {
    const {url} = useParams()
    let countries = getCountries();
    const id = countries.filter(country => country.url === url).map(country => country.id)
    const name = countries.filter(country => country.url === url).map(country => country.name)
    const image = countries.filter(country => country.url === url).map(country => country.image)
    const rp = countries.filter(country => country.url === url).map(country => country.rp)
    const {openModal} = useContext(ModalContext)

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);
    return (
        <>
        <div className='country-page'>
            <div className="container">
                <div className='flex-container'>
                    <img src={`/flags/${image}`} width={300} height={200}/>
                    <div className='title'>
                        <h1>Импорт товаров из {rp}!</h1>
                        <h2>Международные перевозки в условиях санкций!</h2>
                        <button
                            className="btn btn__red"
                            onClick={() => {
                                openModal('modal-text')
                                sendYandexMetrik('reachGoal','ButtonZayavka')
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>

                <div className="country-page__description">
                    <h4>Международные грузоперевозки из {rp} в Россию:</h4>
                    <p>
                        Вы планируете закупку и перевозку товаров из Испании в Россию и понимаете, что Вам необходима профессиональная консультация? <br/>
                        Не стоит рисковать - доверьте это нам - мы располагаем огромным опытом в сфере <b>международных таможенных грузоперевозок!</b>
                    </p>
                    <p>Наше полное сопровождение подразумевает поддержку сделки на каждом этапе работы. Мы предоставим Вам профессиональную консультацию,
                        окажем услуги таможенного представителя и осуществим доставку своими средствами.</p>
                    <p>Главные условия для транспортировки товаров из {rp}:</p>
                    <ul>
                        <li>Подготовка “основного” комплекта документов</li>
                        <li>Выполнение установленных правил тарифного и нетарифного управления</li>
                        <li>Предоставление документации для допуска</li>
                        <li>Оплата всех таможенных сборов</li>
                    </ul>
                </div>
            </div>
        </div>
        <AboutUsSection />
    </>
    );
};

export default Country;