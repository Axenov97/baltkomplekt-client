import Baltkomplekt from '../img/footer/Baltkomplekt.svg'
import FrPalata from '../img/footer/FR-Palata.svg'
import Hermes from '../img/footer/Hermes.svg'
import iconDogovor from '../img/footer/iconDogovor.svg'
import iconPrice from '../img/footer/iconPrice.svg'
import LoPalata from '../img/footer/LO-Palata.svg'
import price from '../upload/baltkomplekt-price.xlsx'
import dogovor from '../upload/dogovor_baltkomplekt_obrazets_2018.doc'
import {sendMail} from "../http/SendMailAPI";
import {useContext} from "react";
import {ModalContext} from "../context";

function Footer() {
    const { form, content, error, setFormContent, closeModal } = useContext(ModalContext)

    const phoneHandler = (e) => {
        setFormContent({...content, phone: e.target.value.replace(/\D/g, '')})
    }

    const sendHandler = async (e) => {
        e.preventDefault()
        try {
            if (content.phone.length) {
                let isAdmin = window.confirm(`Хотите чтобы мы Вам перезвонили по номеру ${content.phone}?`)
                if (isAdmin) {
                    await sendMail('...', '...', content.phone, '...', 'Перезвонить')
                    content.phone = ''
                }
            }
        } catch (error) {
            // console.error(error)
        }
    }

    return <footer id="contact">
        <div className="footer__content container">
            <div className="footer__content_top flex-container">
                <h2 className="blue__head">Контакты</h2>
                <div className="footer_download">
                    <a href={price} className="text a_btn btn__black_border" target="_blank" rel="noreferrer">
                        <img src={iconPrice}  alt='download'/>
                        <p>Скачать прайс</p>
                    </a>
                    <a href={dogovor} className="text a_btn" target="_blank" rel="noreferrer">
                        <img src={iconDogovor} alt='download'/>
                        <p>Скачать брокерский договор</p>
                    </a>
                </div>
            </div>
            <div className="flex-container top-contacts__container">
                <div className="contacts contacts_spb">
                    <h4>Центральный офис в Санкт-Петербурге</h4>
                    <p>
                        <span>Телефон / факс в СПб:</span><br />
                        <a href="tel:8(812)718-69-70">8(812)718-69-70</a><br />
                        <a href="tel:8(812) 718-69-71">8(812) 718-69-71</a>
                    </p>
                    <p>
                        <span>Адрес:</span><br />
                        198035, Санкт-Петербург, Двинская ул., д. 10, кор. 3
                    </p>
                    <p>
                        <span>Email:</span><br />
                        Клиентам: <a href="mailto:info@baltkomplekt.ru">info@baltkomplekt.ru</a><br />
                        Перевозки: <a href="mailto:logist@baltkomplekt.ru">logist@baltkomplekt.ru</a>
                    </p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4757.893600576084!2d30.24746903644106!3d59.908114675973266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469630bdce72efa3%3A0x24617bd4723e938f!2z0KLQsNC80L7QttC10L3QvdGL0Lkg0LHRgNC-0LrQtdGAIMKr0JHQsNC70YLQutC-0LzQv9C70LXQutGCwrs!5e0!3m2!1sru!2sru!4v1615546508892!5m2!1sru!2sru"
                        width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" title="Map"/>
                </div>
            </div>
            <div className="flex-container bottom-contacts__container">
                <div className="contacts contacts_moscow">
                    <h4>Москва</h4>
                    <p>
                        <span>Телефон / факс:</span><br />
                        <a href="tel:8(495) 975-93-73">8(495) 975-93-73</a>
                    </p>
                </div>
                <div className="contacts contacts_novoros">
                    <h4>Новоросийск</h4>
                    <p>
                        <span>Телефон / факс:</span><br />
                        <a href="tel:8 (800) 775-47-94">8 (800) 775-47-94</a>
                    </p>
                </div>
                <div className="contacts contacts_rf">
                    <h4>Бесплатно по РФ</h4>
                    <p>
                        <span>Телефон:</span><br />
                        <a href="tel:8 800 775-47-94">8 800 775-47-94</a>
                    </p>
                </div>
                <div className="contacts contacts_callback">
                    <h4>Мы Вам перезвоним</h4>
                    <form>
                        <input type="hidden" name="project_name" value="Балткомплект" />
                        <input type="hidden" name="admin_email" value="info@baltkomplekt.ru" />
                        <input type="hidden" name="form_subject" value="Клиент просит перезвонить (с главной страницы)" />
                        <input
                            type="tel"
                            className='phone-input'
                            data-tel-input={true}
                            name="Телефон"
                            placeholder="+7 (812) 999 99-99"
                            maxLength="18"
                            value={content.phone}
                            onChange={e => phoneHandler(e)}
                        />
                        <button
                            className='btn btn__black_border'
                            disabled={content.phone.length <= 5}
                            onClick={sendHandler}
                        >
                            Перезвоните мне
                        </button>
                    </form>
                </div>
            </div>
            <div className="download__mobile">
                <a href={price} className="text a_btn" rel="noopener noreferrer">
                    <img src={iconPrice} alt='download'/>
                        <p>Скачать прайс</p>
                </a>
                <a href={dogovor} className="text a_btn" rel="noopener noreferrer">
                    <img src={iconDogovor} alt='download'/>
                        <p>Скачать брокерский договор</p>
                </a>
            </div>
        </div>

        <div className="footer__white">
            <div className="flex-container">
                <div className="footer__white_elem">
                    <img src={Baltkomplekt} alt="Балткомплект" />
                </div>
                <div className="footer__white_elem">
                    <img src={LoPalata} alt="Ленинградская областная торгово-промышленная палата" />
                </div>
                <div className="footer__white_elem">
                    <img src={FrPalata} alt="Финско-Российская торговая палата" />
                </div>
                <div className="footer__white_elem">
                    <img src={Hermes} alt="Гермес Гильдия профессионалов ВЭД" />
                </div>
            </div>
        </div>

    </footer>
}

export { Footer };