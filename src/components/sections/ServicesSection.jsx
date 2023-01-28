import {NavLink} from "react-router-dom";

function ServicesSection(){
    return <section className="services">
        <div className="container">
            <h2>Услуги</h2>
            <div className="flex-container">
                <div className="services__content services__content_left">
                    <NavLink to="/services/transport-services/">
                        <div className="top-block">
                            <h2>Международные перевозки грузов:</h2>
                            <h3>Способы перевозок:</h3>
                            <ul>
                                <li>Морские перевозки</li>
                                <li>Автоперевозки</li>
                                <li>Авиаперевозки</li>
                                <li>Ж/Д перевозки</li>
                            </ul>
                            <h3>Виды перевозок:</h3>
                            <ul>
                                <li>Опасные грузы</li>
                                <li>Сборные грузы</li>
                                <li>Наливные грузов</li>
                                <li>Рефрижераторы</li>
                                <li>Негабаритные грузы</li>
                                <li>Генеральные грузы</li>
                            </ul>
                            <h3>Экспедирование грузов</h3>
                        </div>
                    </NavLink>
                    <NavLink to="/services/ved/">
                        <div className="bottom-block">
                            <h2>Внешняя экономическая деятельность</h2>
                            <ul>
                                <li>Правильный контракт</li>
                                <li>Технический импортер</li>
                                <li>Подготовка документов</li>
                                <li>Прохождение таможни</li>
                                <li>Доставка товаров на условиях INCOTERMS</li>
                                <li>Отчитываемся перед ФНС</li>
                            </ul>
                        </div>
                    </NavLink>
                </div>


                <div className="services__content services__content_center">
                    <NavLink to="/services/parallel-import/">
                        <div className="top-block">
                            <h2>Параллельный импорт</h2>
                            <ul>
                                <li>Доставка товаров из стран Европы</li>
                                <li>Доставка товаров из США и Китая</li>
                                <li>4 уникальные схемы перевозок для наших клиентов</li>
                            </ul>
                        </div>
                    </NavLink>
                    <NavLink to="/services/solutions/">
                        <div className="center-block">
                            <h2>Классификационные решения</h2>
                            <ul>
                                <li>Получение предварительного классификационного решения на това</li>
                                <li>Получение классификационного решения на ввоз многокомпонентного оборудования,
                                ввозимого в разобранном или несобранном вид</li>
                            </ul>
                        </div>
                    </NavLink>
                    <NavLink to="/services/custom-clearance/">
                        <div className="bottom-block">
                            <h2>Финансовые услуги</h2>
                            <ul>
                                <li>Финансовое сопровождения сделок;</li>
                                <li>Организация и проведение работ по взвешиванию груза, определению качества товара, отбор образцов и проб в различные службы;</li>
                                <li>Организация оперативного внутрипортового экспедирования товаров;</li>
                                <li>Обеспечение доставки грузов до склада получателя в любой из регионов РФ</li>
                            </ul>
                        </div>
                    </NavLink>
                </div>

                <div className="services__content services__content_right">
                    <NavLink to="/services/custom-clearance/">
                        <div className='top-block'>
                            <h2>Таможенное оформление:</h2>
                            <h3>Таможенное декларирование любых товаров и грузов:</h3>
                            <ul>
                                <li>Оформление экспорта и импорта;</li>
                                <li>Оформление опасных грузов;</li>
                                <li>Декларирование лекарственных средств;</li>
                                <li>Таможенное оформление почтовых отправлений и посылок;</li>
                                <li>Таможенное декларирование денежных средств;</li>
                                <li>Классификация товаров в соответствии ТН ВЭД ТС;</li>
                            </ul>
                            <h3>Подготовка документов:</h3>
                            <ul>
                                <li>Подготовка полного перечня документов для таможенного оформления;</li>
                                <li>Оформление полного пакета разрешительной документации при таможенном декларировании грузов;</li>
                            </ul>
                            <h3>Консультационные услуги:</h3>
                            <ul>
                                <li>Оказание услуг в сфере консультирования по таможенным ставкам и расчета сумм таможенных платежей (пошлин);</li>
                                <li>Расчет стоимости транспортных расходов, включая стоимость на таможенное оформление декларации на товары.</li>
                            </ul>
                            <button className='btn btn__blue'>Смотреть цены</button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
}
export {ServicesSection}