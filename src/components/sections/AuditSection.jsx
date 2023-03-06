import React, {useContext} from 'react';
import auditImage from "../../img/audit.svg";
import './../../scss/auditSection.scss'
import {ModalContext} from "../../context";

const AuditSection = () => {
    const {openModal} = useContext(ModalContext)

    return <>
        <section className="audit__section">
            <div className="container">
                <div className="flex-container">
                    <div className="audit__section_image">
                        <img src={auditImage} alt='Таможенный аудит балткомплект' />
                    </div>
                    <div className="audit__section_text">
                        <h2>Таможенный аудит</h2>
                        <p>
                            Задача таможенного аудита - поиск  решений, позволяющих своевременно выявить риски
                            в ведении компанией ВЭД и минимизировать их негативные последствия для импортера.
                        </p>
                        <button
                            className='btn btn__black_border'
                            onClick={() => openModal('modal-text')}
                        >
                            Заказать услугу
                        </button>
                    </div>
                </div>

                <div className="audit__content">
                    <div className="audit__content_item">
                        <h2>Таможенный аудит</h2>
                        <p><b>Таможенный аудит</b> - это эффективное средство достижения стабильности функционирования компании,
                            осуществляющей внешнеэкономическую деятельность (ВЭД).</p>

                        <p><b>Миссия: </b>устойчивое функционирование процессов компаний и минимизация существующих рисков их неэффективности.</p>

                        <p><b>Задача таможенного аудита: </b>поиск  решений, позволяющих своевременно выявить риски в ведении
                            компанией ВЭД и минимизировать их негативные последствия для импортера.</p>

                        <p><b>Цели: </b>выявление рисков наступления вредных последствий вследствие нарушения таможенного законодательства,
                            которые в перспективе могут нести издержки, размер которых может превышать финансовые возможности компании.
                            Выявление рисков необоснованных финансовых издержек, в результате которых компания недополучит прибыль из-за
                            переплаты таможенных пошлин и налогов.</p>
                    </div>
                    <div className="audit__content_item">
                        <h2>Услуги таможенного аудита</h2>
                        <p>
                            <b>Мы предлагаем:</b> <br/>
                            1.	Оперативную поддержку участникам внешнеэкономической деятельности в сложившийся негативных условиях,
                            связанных с проведением проверок после выпуска (проверка по линии таможенной стоимости,
                            неверного заявления классификационного кода ТНВЭД, несоблюдение мер технического регулирования,
                            связанного с сертификацией и декларированием соответствия продукции и соблюдения запретов и ограничений в целом. <br/>
                            2.	  Обеспечение информационного и аналитического сопровождения процесса принятия заказчиком
                            управленческих решений по устранению выявленного риска, в том числе разъяснения иностранному контрагенту
                            требования таможенного законодательства (как необходимо составлять документы для целей подтверждения
                            таможенной стоимости товара и классификационного кода ТНВЭД) . В результате компания не будет излишне
                            уплачивать таможенные пошлины и может увеличить объем продаж, снизив отпускную цену при продаже товара. <br/>
                            3.	 Выявления фактов излишней уплаты таможенных платежей, например,
                            по причине неверной классификации товара в соответствии с ТН ВЭД ЕАЭС.
                            То есть, в результате применения кода товара с большей ставкой таможенной пошлины ввиду
                            жесткого контроля таможенным органом правильности заявления сведений о классификационном
                            коде в отношении товаров со ставкой таможенной пошлины 0%,  компания – импортер несет убытки. <br/>
                            Мы предлагаем возможность не только применять при выпуске товара ставку таможенной пошлины в размере 0%,
                            но и поможем вернуть излишне уплаченные таможенные платежи за предыдущий период,
                            в течение которого  применялся при таможенном декларировании неверный код товара. <br/>
                            4.	Устранение вероятности привлечения участника ВЭД к административной и уголовной ответственности.
                            Результаты таможенного аудита позволяют осуществить законную оптимизацию уплаты таможенных пошлин.
                            И, как следствие, в последующем осуществлять более гибкое ценообразование на внутреннем рынке,
                            увеличивая свою долю присутствия на нем за счет новых потребителей, привлекаемых более низкой ценой работы.
                        </p>
                    </div>
                    <div className="audit__content_item">
                        <p><b>По результатам нашей деятельности Ваша компания получит:</b> <br/>
                            ·       перечень и описание потенциальных таможенных рисков; <br/>
                            ·       рекомендации по устранению и минимизации рисков.
                        </p>
                        <p><b>Вопросы, на которые мы поможем Вам ответить (список приведен для примера и не является исчерпывающим)</b></p>
                        <p>
                            Как заключить внешнеторговый контракт без таможенных, налоговых и валютных рисков? <br/>
                            Как правильно оформить товаросопроводительные документы для целей соблюдения таможенного законодательства? <br/>
                            Что делать, если таможенный орган проводит по Вам проверку? <br/>
                            Как избежать штрафных санкций при декларировании и после выпуска? <br/>
                            Как снизить расходы на ведение внешнеэкономической деятельности? <br/>
                            Как обжаловать решение таможенного органа <br/>
                            Как возвратить задержанный таможенным органом товар? <br/>
                            Что делать в случае дополнительной проверки таможенной стоимости до или после выпуска? <br/>
                            Что делать в случае дополнительной проверки кода ТНВЭД? <br/>
                            Что делать в случае назначения таможенным органом таможенной экспертизы? <br/>
                            Что делать в случае регулярных таможенных досмотров во время выпуска? <br/>
                            Что делать в случае запроса таможенным органом технической документации при ее отсутствии? <br/>
                            Как правильно включать размер лицензионных платежей в таможенную стоимость?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default AuditSection;