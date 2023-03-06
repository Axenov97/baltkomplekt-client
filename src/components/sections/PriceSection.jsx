import {ModalContext} from "../../context";
import {useContext, useEffect, useState} from 'react'
import price from '../../upload/baltkomplekt-price.xlsx'
import {sendYandexMetrik} from "../../utils/metriks";

function PriceSection(){
    const {openModal} = useContext(ModalContext)
    const [tbodyToggle, setTbodyToggle] = useState(false)

    function handlePrice() {
        setTbodyToggle(!tbodyToggle)
        const price = document.querySelector('.price');
        price.scrollIntoView({behavior: 'smooth', block:'start'}, 500)
    }

    return (
        <section className="price" >
            <div className="container">
                <h2 style={{textAlign:'center'}}>Цены</h2>
                <div className="table">
                    <table className="serv-table">
                        <tbody className={tbodyToggle ? 'show' : 'hide'}>
                            <tr className="tab_head">
                                <th width="55%">Услуга</th>
                                <th width="25%" className="display-none">Ед. измерения</th>
                                <th width="20%">Стоимость (руб),</th>
                            </tr>

                            <tr className="strong strong_first">
                                <td colSpan="2">Оформление документов в режиме «Выпуск для внутреннего потребления» в
                                    Санкт-Петербургской, Пулковской, Балтийской таможнях
                                </td>
                            </tr>

                            <tr>
                                <td>Подготовка комплекта документов для оформления ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">4800</td>
                            </tr>

                            <tr>
                                <td>Таможенное оформление ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">9000</td>
                            </tr>

                            <tr>
                                <td>Составление добавочного листа к ДТ</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">1200</td>
                            </tr>

                            <tr>
                                <td>Составление дополнительного листа к ДТ</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">240</td>
                            </tr>

                            <tr>
                                <td>Организация таможенного досмотра/осмотра</td>
                                <td className="display-none">1 досмотр/осмотр при оформлении 1 ДТ</td>
                                <td className="resp-price">3000</td>
                            </tr>

                            <tr>
                                <td>Оформление статистической формы одной товарной партии при ввозе/вывозе товара из/в
                                    стран/страны ТС
                                </td>
                                <td className="display-none">1 СФ</td>
                                <td className="resp-price">5160</td>
                            </tr>

                            <tr>
                                <td>Составление основного листа ДТС</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">960</td>
                            </tr>

                            <tr>
                                <td>Составление добавочного листа ДТС</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">720</td>
                            </tr>

                            <tr className="strong">
                                <td colSpan="2">Оформление документов в режиме «Экспорт», в Санкт-Петербургской, Пулковской,
                                    Балтийской таможнях
                                </td>
                            </tr>

                            <tr>
                                <td>Подготовка комплекта документов для оформления ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">4800</td>
                            </tr>
                            <tr>
                                <td>Таможенное оформление ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">9000</td>
                            </tr>
                            <tr>
                                <td>Составление добавочного листа к ДТ</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">1200</td>
                            </tr>
                            <tr>
                                <td>Организация таможенного досмотра/осмотра и таможенные операции, совершаемые таможенным
                                    представителем при досмотре/осмотре, в отношении партии товаров, следующих на 1
                                    транспортном средстве (в 1 контейнере)
                                </td>
                                <td className="display-none">1 досмотр/осмотр при оформлении 1 ДТ</td>
                                <td className="resp-price">3000</td>
                            </tr>
                            <tr>
                                <td>Оформление статистической формы одной товарной партии при ввозе/вывозе товара из/в
                                    стран/страны ТС
                                </td>
                                <td className="display-none">1 СФ</td>
                                <td className="resp-price">5160</td>
                            </tr>
                            <tr>
                                <td>Составление основного листа ДТС</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">960</td>
                            </tr>
                            <tr>
                                <td>Составление добавочного листа ДТС</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">720</td>
                            </tr>

                            <tr className="strong">
                                <td colSpan="2">Оформление документов в иных таможенных режимах в Санкт-Петербургской,
                                    Пулковской, Балтийской таможнях
                                </td>
                            </tr>

                            <tr>
                                <td>Подготовка комплекта документов для оформления ДТ в таможенном органе в отношении партии
                                    товаров, перемещаемых на 1 транспортном средстве (в 1 контейнере), 1 товарная позиция*
                                </td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">17943</td>
                            </tr>
                            <tr>
                                <td>Таможенное оформление ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">7800</td>
                            </tr>
                            <tr>
                                <td>Составление добавочного листа к ДТ</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">1200</td>
                            </tr>
                            <tr>
                                <td>Организация таможенного досмотра/осмотра</td>
                                <td className="display-none">1 досмотр/осмотр при оформлении 1 ДТ</td>
                                <td className="resp-price">5160</td>
                            </tr>
                            <tr>
                                <td>Составление основного листа ДТС</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">960</td>
                            </tr>
                            <tr>
                                <td>Составление добавочного листа ДТС</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">720</td>
                            </tr>
                            <tr>
                                <td>Оформление временного ввоза/вывоза одной товарной партии по «CARNET ATA»</td>
                                <td className="display-none">1 партия</td>
                                <td className="resp-price">16320</td>
                            </tr>
                            <tr>
                                <td>Получение Разрешения на переработку вне/на территории ТС</td>
                                <td className="display-none">1 разрешение</td>
                                <td className="resp-price">15300</td>
                            </tr>


                            <tr className="strong">
                                <td colSpan="2">Оформление документов в режимах «Выпуск для внутреннего потребления»,
                                    «Экспорт», «Переработка на/вне, «Реэкспорт», Реимпорт», «Временный ввоз/вывоз» в иных
                                    таможенных органах
                                </td>
                            </tr>

                            <tr>
                                <td>Подготовка комплекта документов для оформления ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">4800</td>
                            </tr>
                            <tr>
                                <td>Таможенное оформление ДТ</td>
                                <td className="display-none">ДТ</td>
                                <td className="resp-price">16320</td>
                            </tr>
                            <tr>
                                <td>Составление добавочного листа к ДТ</td>
                                <td className="display-none">документ</td>
                                <td className="resp-price">1200</td>
                            </tr>
                            <tr>
                                <td>Организация таможенного досмотра/осмотра</td>
                                <td className="display-none">1 досмотр/осмотр при оформлении 1 ДТ</td>
                                <td className="resp-price">5160</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex-container price__buttons">
                        <button
                            onClick={handlePrice}
                            className='show-hide__btn btn'
                        >
                            {tbodyToggle ? 'Скрыть' : 'Развернуть'}
                        </button>
                        <a href={price} target="_blank" rel="noreferrer" className="btn__left a_btn btn__black_border">Скачать прайс</a>
                        <div className="btn__right">
                            <button id="_modal-calculate" className="btn" onClick={()=>openModal('modal-text')}>Рассчитать перевозку</button>
                            <button id="_modal-text" className="btn btn__blue" onClick={()=>{
                                openModal('modal-text')
                                sendYandexMetrik('reachGoal','ButtonZayavka')}
                            }>Оставить заявку</button>
                        </div>
                    </div>
                    <p className='disclaimer'>Не является публичной офертой. Окончательные цены будут установлены после согласования документов, товара, количества партий и др.</p>
                </div>
            </div>
        </section>
    )
}
export {PriceSection}