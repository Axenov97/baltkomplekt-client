import React from 'react';
import Eu from './../../img/flags/EU.svg'
import Tu from './../../img/flags/TU.svg'
import In from './../../img/flags/IN.svg'
import Ru from './../../img/flags/RU.svg'
import arrow from './../../img/desctopBlueArrow.svg'

const Chain = () => {
    return <div className='chain'>
        <div className="container">
            <div className="bg-img">
                <h2>Как мы работаем?</h2>
                <h3>Модели поставок товаров EU в рамках параллельного импорта</h3>
                <div className="chain__models">
                    <div className="chain__models_model model">
                        <h5>Модель 1</h5>
                        <div className="model__link">
                            <img src={Eu} alt="ЕС"/>
                            <p>Поставщик EU</p>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link">
                            <img src={Tu} alt="Флаг Турции"/>
                            <p>Турецкая компания</p>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link">
                            <img src={Ru} alt="Флаг России"/>
                            <p>Российский импортер</p>
                        </div>
                    </div>
                    <div className="chain__models_model model">
                        <h5>Модель 2</h5>
                        <div className="model__link">
                            <img src={Eu} alt="ЕС"/>
                            <p>Поставщик EU</p>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link big-width">
                            <img src={Eu} alt="ЕС"/>
                            <div className="model__link_text">
                                <p>Посредник EU</p>
                                <li>Закупка товаров на рынке EU</li>
                                <li>Экспорт из EU</li>
                                <li>Возврат VAT EU</li>
                            </div>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link">
                            <img src={Tu} alt="Флаг Турции"/>
                            <div className="model__link_text">
                                <p>Турецкая компания</p>
                                <li>Транзит</li>
                                <li>Реэкспорт</li>
                            </div>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link">
                            <img src={Ru} alt="Флаг России"/>
                            <p>Российский импортер</p>
                        </div>
                    </div>
                    <div className="chain__models_model model">
                        <h5>Модель 3</h5>
                        <div className="model__link-group">
                            <div className="model__link">
                                <img src={Eu} alt="ЕС"/>
                                <p>Поставщик EU</p>
                            </div>
                            <div className="model__link">
                                <img src={Tu} alt="Флаг Турции"/>
                                <p>Производство в Турции</p>
                            </div>
                            <div className="model__link">
                                <img src={Tu} alt="Флаг Турции"/>
                                <p>Турецкий дилер бренда EU</p>
                            </div>
                        </div>

                        <img src={arrow} className='arrow'/>
                        <div className="model__link middle-width">
                            <img src={Tu} alt="Флаг Турции"/>
                            <div className="model__link_text">
                                <p>Турецкая компания</p>
                                <li>Закупка товаров на внутреннем турецком рынке</li>
                                <li>Экспорт в РФ</li>
                                <li>Возврат турецкого VAT</li>
                            </div>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link">
                            <img src={Ru} alt="Флаг России"/>
                            <p>Российский импортер</p>
                        </div>
                    </div>
                    <div className="chain__models_model model">
                        <h5>Модель 4</h5>
                        <div className="model__link-group">
                            <div className="model__link">
                                <img src={Eu} alt="ЕС"/>
                                <p>Поставщик EU</p>
                            </div>
                            <div className="model__link">
                                <img src={In} alt="Флаг Индии"/>
                                <p>Производство в Индии</p>
                            </div>
                            <div className="model__link">
                                <img src={In} alt="Флаг Индии"/>
                                <p>Индийский дилер бренда EU</p>
                            </div>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link middle-width">
                            <img src={In} alt="Флаг Индии"/>
                            <div className="model__link_text">
                                <p>Индийская компания</p>
                                <li>Закупка товаров на внутреннем индийском рынке</li>
                                <li>Экспорт в РФ</li>
                                <li>Возврат турецкого VAT</li>
                            </div>
                        </div>
                        <img src={arrow} className='arrow'/>
                        <div className="model__link">
                            <img src={Ru} alt="Флаг России"/>
                            <p>Российский импортер</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Chain;