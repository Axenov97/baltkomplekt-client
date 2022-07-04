import presentationImage from '../../img/solution/presentation.svg'
import BK_Pres_2020 from '../../upload/BK_Pres_2020.pdf'
import BK_Pres_2020_2 from '../../upload/BK_Pres_2020_2.pdf'
import {useContext} from 'react'
import {ModalContext} from "../../context";
import {sendYandexMetrik} from "../../utils/metriks";

function SolutionsSection(){
    const {openModal} = useContext(ModalContext)

    return <>
        <section className="department__section">
            <div className="container">
                <h2>Наш отдел</h2>
                <div className="flex-container department__content">
                    <div className="department__content_left">
                        <span>7</span>
                        <p>Семь специалистов с профильным химическим и техническим образованием со знанием технического
                            английского языка входит в наш информационно-технический отдел</p>
                    </div>
                    <div className="department__content_right">
                        <span>10</span>
                        <p>10 лет опыта работы по оформлению классификационных решений.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="solution__section">
            <div className="container">
                <div className="solution__first flex-container">
                    <div className="solution__first_left">
                        <h2>Об услуге</h2>
                        <p>Наше подразделение может являться базовым, для производства работ по получению
                            классификационных решений в ФТС России.</p>
                        <p>В зависимости от объема работы количество специалистов информационно-аналитического
                            отдела может быть увеличено. Руководитель отдела и специалисты подразделения готовы к
                            необходимым поездкам и рабочим встречам в Москве и других городах</p>
                        <button
                            id="_modal-text"
                            className="btn btn__lightblue"
                            onClick={()=>{
                                openModal('modal-text')
                                sendYandexMetrik('reachGoal','ButtonZayavka')
                            }}
                        >
                            Оставить заявку
                        </button>
                        <p className="gray-text">Если у вас есть сомнения или вопросы – наши специалисты окажут
                            профессиональную консультацию.
                            Стоимость получения предварительного классификационного решения и классификационного
                            решения на ввоз многокомпонентного оборудования в каждом конкретном случае определяется
                            индивидуально.</p>
                    </div>
                    <div className="solution__first_right">
                        <div className="top-block">
                            <img src={presentationImage} alt='балткомплект'/>
                                <p>Предварительное решение ФТС при ввозе товара различными товарными партиями в
                                    течении определенного периода (.pdf)</p>

                                <a href={BK_Pres_2020} target='_blank' rel="noopener noreferrer"
                                   className="text btn btn__white">Скачать презентацию</a>

                        </div>
                        <div className="bottom-block">
                            <img src={presentationImage} alt='балткомплект'/>
                                <p>Этапы получения классификационного решения при ввозе многокомпонентного товара в
                                    разобранном состоянии несколькими партиями (.pdf)</p>

                                <a href={BK_Pres_2020_2} target='_blank' rel="noopener noreferrer"
                                   className="text btn btn__white">Скачать презентацию</a>
                        </div>
                    </div>
                </div>
                <div className="solution__second">
                    <h2>Первый вид решения</h2>
                    <p>Предварительное классификационное решение получается импортером при сомнении в правильности
                        определения кода ТНВЭД ЕАЭС, а также для минимизации рисков переклассификации товара в
                        процессе таможенного оформления.</p>
                    <p>Таким образом, в течении 5 лет импортер может спокойно оформлять товары в данном коде ТНВЭД
                        ЕАЭС.<br />
                            Предварительное классификационное решение получается на каждый артикул ввозимого товара.
                    </p>
                    <p><b>Документы, которые потребуются для получения предварительного классификационного
                        решения:</b></p>
                    <ul>
                        <li>Техническая документация на ввозимый товар (например, технический паспорт, руководство
                            по эксплуатации, сертификат анализа, сертификат безопасности товара и т.п.);
                        </li>
                        <li>Любые заключения и экспертизы на товар;</li>
                        <li>Внешнеторговый контракт, по которому будет поставляться товар;</li>
                        <li>Сведения о ранее выпущенных декларациях с данным товаром.</li>
                    </ul>
                    <div style={{textAlign: 'right'}}>
                        <button
                            id="_modal-text"
                            className="btn btn__lightblue"
                            onClick={()=>{
                                openModal('modal-text')
                                sendYandexMetrik('reachGoal','ButtonZayavka')
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>
                <div className="solution__three">
                    <h2>Второй вид решения</h2>
                    <p>Классификационное решение (КР) ФТС - получается при ввозе многокомпонентного товара,
                        поставляемого в разобранном, несобранном или некомплектном виде, поставляемого отдельными
                        партиями в течении определенного периода времени. Получение данного решения является
                        масштабной аналитической работой. Важно провести тщательную подготовку и анализ технической
                        документации на товар. <br />
                            Сложность также заключается в том, что каждое оборудование имеет свою специфику, а
                            иногда, уникально. В процессе получения классификационного решения ФТС таможенный орган
                            может дополнительно запросить технические документы.</p>
                    <p><b>Примерный перечень:</b></p>
                    <ul>
                        <li>Схемы и сборка монтажа оборудования;</li>
                        <li>Исчерпывающий перечень компонентов оборудования;</li>
                        <li>Описание технологического процесса работы оборудования.</li>
                    </ul>
                    <div style={{textAlign: 'right'}}>
                        <button
                            id="_modal-text"
                            className="btn btn__lightblue"
                            onClick={()=>{
                                openModal('modal-text')
                                sendYandexMetrik('reachGoal','ButtonZayavka')
                            }}
                        >
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export {SolutionsSection}