import {ModalContext} from "../../context";
import React, {useContext} from 'react'
import {sendYandexMetrik} from "../../utils/metriks";
import {Link, NavLink, useNavigate} from "react-router-dom";


function HomeSection({setIsScrollable}){
    const {openModal} = useContext(ModalContext)
    const navigator = useNavigate()

    return <>
        <section className="home__section">
            <div className="bg-img">
                <div className="top-container">
                    <div className="container flex-container">
                        <div className="home__section_left">
                           <h1>Ваш надежный поставщик <br/>
                               и таможенный представитель</h1>
                            <div className="alarms">
                                <div className='alarm'>
                                    <p>Только юридические лица</p>
                                </div>
                                <div className='alarm'>
                                    <p>Работаем в условиях санкций</p>
                                </div>
                            </div>
                            <p>Мы работаем более 20 лет. Предоставляем услуги по таможенному оформлению, по доставке дверь дверь,
                                международные железнодорожные перевозки, авиа перевозки, контейнерные перевозки,
                                автоперевозки из стран Азии, Индии, Ирана, Турции, Европы.</p>
                            <button
                                className="btn btn__blue"
                                onClick={() => openModal('modal-text')}
                            >
                                Расчитать перевозку
                            </button>
                            <button
                                className="btn btn__white_border"
                                onClick={() => {
                                    openModal('modal-text')
                                    sendYandexMetrik('reachGoal','ButtonZayavka')
                                }}
                            >
                                Оставить заявку
                            </button>
                        </div>
                        <div className="home__section_right">
                            <div className="blog__group">
                                <h3>Наш Блог</h3>
                                <p>Публикуем только самое интересное и важное в мире таможни</p>
                                <NavLink to='/blog/materials/' className='blog-group__btn' >Справочные материалы</NavLink>
                                <NavLink to='/blog/cases/' className='blog-group__btn'>Интересные кейсы</NavLink>
                                <NavLink to='/blog/faq/' className='blog-group__btn'>Ответы на вопросы</NavLink>
                                <NavLink to='/blog/news/' className='blog-group__btn'>Новости</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="container">
                        <div className="flex-container">
                            <div className="links-block">
                                <Link to='services/transport-services/' className='link-head'>Международные перевозки</Link>
                                <div className="sublinks">
                                    <div className="sublinks-left">
                                        <p>Виды перевозок:</p>
                                        <a>Опасные грузы</a>
                                        <a>Сборные грузы</a>
                                        <a>Наливные грузов</a>
                                        <a>Рефрижераторы</a>
                                        <a>Негабаритные  грузы</a>
                                        <a>Генеральные грузы</a>
                                    </div>
                                    <div className="sublinks-right">
                                        <p>Способы перевозок:</p>
                                        <a>Морские перевозки</a>
                                        <a>Автоперевозки</a>
                                        <a>Авиаперевозки</a>
                                        <a>Ж/Д перевозки</a>
                                        <p className='last-p'>Экспедирование грузов</p>
                                    </div>
                                </div>
                            </div>
                            <div className="links-block">
                                <Link to='services/custom-clearance/' className='link-head'>Таможенное оформление</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <a>Таможенное декларирование любых товаров и грузов</a>
                                        <a>Подготовка документов</a>
                                        <a>Консультационные услуги</a>
                                        <button
                                            className='btn btn__white_border'
                                            onClick={()=>{
                                                setIsScrollable(true)
                                                navigator('services/custom-clearance/')
                                            }}
                                        >
                                            Смотреть цены
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="links-block">
                                <Link to='services/custom-clearance/' className='link-head'>Параллельный импорт</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <a>Доставка товаров из стран Европы</a>
                                        <a>Доставка товаров из США и Китая</a>
                                        <a>4 уникальные схемы перевозок</a>
                                        <a>для наших клиентов</a>
                                        <button
                                            className='btn btn__white_border'
                                            onClick={()=>{
                                                setIsScrollable(true)
                                                navigator('services/parallel-import/')
                                            }}
                                        >
                                            Смотреть схемы поставок
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="links-block">
                                <Link to='services/solutions/' className='link-head'>Классифика-
                                    ционные
                                    решения
                                </Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <a>Получение предварительного классификационного решения на товар</a>
                                        <a>Получение классификационного решения на ввоз многокомпонентного оборудования,
                                            ввозимого в разобранном или несобранном виде</a>
                                    </div>
                                </div>
                            </div>
                            <div className="links-block">
                                <Link to='services/ved/' className='link-head'>Внешняя экономическая деятельность</Link>
                                <div className="sublinks">
                                    <div className="sublinks-center">
                                        <a>Правильный контракт</a>
                                        <a>Технический импортер</a>
                                        <a>Подготовка документов</a>
                                        <a>Прохождение таможни</a>
                                        <a>Доставка товаров на условиях INCOTERMS</a>
                                        <a>Отчитываемся перед ФНС</a>
                                    </div>
                                </div>
                            </div>
                            <div className="links-block">
                                <Link to='services/custom-clearance/' className='link-head'>Финансовые услуги</Link>
                                <div className="sublinks">
                                <div className="sublinks-center">
                                    <a>Финансовое сопровождения сделок;</a>
                                    <a>Организация работ по взвешиванию груза, определению качества товара,
                                        отбор образцов и проб в службы;</a>
                                    <a>Организация оперативного внутри-портового экспедирования товаров;</a>
                                    <a>Обеспечение доставки грузов до склада получателя в любой регион РФ.</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
}
export {HomeSection}