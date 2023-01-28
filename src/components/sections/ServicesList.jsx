import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {StrengthSection} from "./StrengthSection";
import {ClientsSection} from "./ClientsSection";
import {BlogSection} from "../blogComponents/BlogSection";

const ServicesList = () => {
    const navigator = useNavigate()

    return <>
        <section className="services-list__section">
            <div className="bg-img">
                <div className="container">
                    <div className="top-block">
                        <h1>Услуги</h1>
                        <div className="alarms">
                            <div className='alarm'>
                                <p>Только юридические лица</p>
                            </div>
                            <div className='alarm'>
                                <p>Работаем в условиях санкций</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-block flex-container">
                        <div className="bottom-block__left">
                            <div className="links-block">
                                <Link to='transport-services/' className='link-head'>Международные перевозки</Link>
                                <div className="sublinks">
                                    <div className="sublinks-left">
                                        <p>По видам перевозок:</p>
                                        <a>Опасные грузы</a>
                                        <a>Сборные грузы</a>
                                        <a>Наливные грузов</a>
                                        <a>Рефрижераторы</a>
                                        <a>Негабаритные  грузы</a>
                                        <a>Генеральные грузы</a>
                                    </div>
                                    <div className="sublinks-right">
                                        <p>По способам перевозок:</p>
                                        <a>Морские перевозки</a>
                                        <a>Автоперевозки</a>
                                        <a>Авиаперевозки</a>
                                        <a>Ж/Д перевозки</a>
                                        <a className='last-p'>Экспедирование грузов</a>
                                        <a className='last-p'>Погрузочно-разгрузочные работы</a>
                                        <a className='last-p'>География перевозок</a>
                                    </div>
                                </div>
                            </div>

                            <div className="links-block">
                                <Link to='parallel-import/' className='link-head'>Параллельный импорт</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <li>Доставка товаров из стран Европы в условиях санкций</li>
                                        <li>Доставка товаров из США и Китая</li>
                                        <li>Транзит через турцию и Индию</li>
                                        <li>4 уникальные схемы перевозок для наших клиентов</li>
                                        <button className='btn btn__white_border'>Смотреть схемы поставок</button>
                                    </div>
                                </div>
                            </div>

                            <div className="links-block">
                                <Link to='ved/' className='link-head'>Внешняя экономическая деятельность</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <li>Правильный контракт</li>
                                        <li>Технический импортер</li>
                                        <li>Подготовка документов</li>
                                        <li>Прохождение таможни</li>
                                        <li>Доставка товаров на условиях INCOTERMS</li>
                                        <li>Отчитываемся перед ФНС</li>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-block__right">
                            <div className="links-block">
                                <Link to='custom-clearance/' className='link-head'>Таможенное оформление</Link>
                                <button
                                    style={{marginLeft: '5%'}}
                                    className='btn btn__white_border'
                                    onClick={()=>{
                                        navigator('services/custom-clearance/')
                                    }}
                                >
                                    Смотреть цены
                                </button>
                                <div className="sublinks">
                                    <div className="sublinks-left">
                                        <a>Таможенное оформление товаров и грузов</a>
                                        <a>Юридическое сопровождение сделок и перевозок</a>
                                        <a>Подготовка документов и таможенные сборов</a>
                                        <a>Финансовое сопровождение сделок</a>
                                        <a>Расчет таможенной пошлины</a>
                                        <a>Экспедирование</a>
                                        <a>Консультации</a>
                                    </div>
                                    <div className="sublinks-right">
                                        <p>По типу груза:</p>
                                        <a>Овощи и фрукты</a>
                                        <a>Животные</a>
                                        <a>Оборудование</a>
                                        <a>Нефтепродукты</a>
                                        <a>Одежда</a>
                                        <a>Лекарственные средства</a>
                                        <a>Драгоценные металлы</a>
                                        <a>Оружие</a>
                                        <a>Алкоголь и сигареты</a>
                                    </div>
                                </div>
                            </div>

                            <div className="links-block">
                                <Link to='solutions/' className='link-head'>Классификационные решения</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <li>Получение классификационного решения  по ТН ВЭД ТС</li>
                                        <li>Получение предварительного классификационного решения на товар</li>
                                        <li>Получение классификационного решения на ввоз многокомпонентного оборудования,
                                            ввозимого в разобранном или несобранном виде</li>
                                    </div>
                                </div>
                            </div>

                            <div className="links-block">
                                <Link to='custom-clearance/' className='link-head'>Финансовые услуги</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <li>Финансовое сопровождения сделок</li>
                                        <li>Организация работ по взвешиванию груза, определению качества товара,
                                            отбор образцов и проб в службы</li>
                                        <li>Организация оперативного внутри-портового экспедирования товаров</li>
                                        <li>Обеспечение доставки грузов до склада получателя в любой регион РФ</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <StrengthSection />
        <ClientsSection />
        {/*<BlogSection location={location}/>*/}
    </>
};

export default ServicesList;