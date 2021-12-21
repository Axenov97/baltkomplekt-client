import Baltkomplekt from '../img/footer/Baltkomplekt.svg'
import FrPalata from '../img/footer/FR-Palata.svg'
import Hermes from '../img/footer/Hermes.svg'
import iconDogovor from '../img/footer/iconDogovor.svg'
import iconPrice from '../img/footer/iconPrice.svg'
import LoPalata from '../img/footer/LO-Palata.svg'
import price from '../upload/baltkomplekt-price.xlsx'
import dogovor from '../upload/dogovor_baltkomplekt_obrazets_2018.doc'

function Footer() {

    return <footer id="contact">
        <div className="footer__content container">
            <div className="footer__content_top flex-container">
                <h2 className="blue__head">Контакты</h2>
                <div className="footer_download">
                    <a href={price} className="text a_btn" target="_blank">
                        <img src={iconPrice}  alt='download'/>
                            <p>Скачать прайс</p>
                    </a>
                    <a href={dogovor} className="text a_btn" target="_blank">
                        <img src={iconDogovor} alt='download'/>
                            <p>Скачать брокерский договор</p>
                    </a>
                </div>
            </div>
            <div className="grid-container">
                <div className="contacts contacts_spb">
                    <h4>Центральный офис в <br /> Санкт-Петербурге</h4>
                    <p>
                        <b>Телефон / факс в СПб:</b><br />
                        <a href="tel:8(812)718-69-70">8(812)718-69-70</a><br />
                        <a href="tel:8(812) 718-69-71">8(812) 718-69-71</a>
                    </p>
                    <p>
                        <b>Адрес:</b><br />
                        <p style={{padding: 0}}>198035, Санкт-Петербург, Двинская ул., д. 10, кор. 3</p>
                    </p>

                    <p>
                        <b>Email:</b><br />
                        Клиентам: <a href="mailto:info@baltkomplekt.ru"><b>info@baltkomplekt.ru</b></a><br />
                        Перевозки: <a href="mailto:logist@baltkomplekt.ru"><b>logist@baltkomplekt.ru</b></a>
                    </p>
                </div>
                <div className="contacts contacts_moscow">
                    <h4>Москва</h4>
                    <p>
                        <b>Телефон / факс в Москве:</b><br />
                        <a href="tel:8(495) 975-93-73">8(495) 975-93-73</a>
                    </p>
                </div>
                <div className="contacts contacts_novoros">
                    <h4>Новоросийск</h4>
                    <p>
                        <b>Телефон / факс в Новороссийске:</b><br />
                        <a href="tel:8 (800) 775-47-94">8 (800) 775-47-94</a>
                    </p>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4757.893600576084!2d30.24746903644106!3d59.908114675973266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469630bdce72efa3%3A0x24617bd4723e938f!2z0KLQsNC80L7QttC10L3QvdGL0Lkg0LHRgNC-0LrQtdGAIMKr0JHQsNC70YLQutC-0LzQv9C70LXQutGCwrs!5e0!3m2!1sru!2sru!4v1615546508892!5m2!1sru!2sru"
                        width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" title="Map"/>
                </div>
                <div className="footer__callback flex-container">
                    <div className="footer__callback_name">
                        <h4>Бесплатно по России</h4>
                        <a href="tel:8 800 775-47-94">8 800 775-47-94</a>
                    </div>
                    <form>
                        <input type="hidden" name="project_name" value="Балткомплект" />
                        <input type="hidden" name="admin_email" value="info@baltkomplekt.ru" />
                        <input type="hidden" name="form_subject" value="Клиент просит перезвонить (с главной страницы)" />
                        <input type="tel" data-tel-input name="Телефон" placeholder="+7 (999) 999 99-99" maxLength="18" />
                        <button>Перезвонить</button>
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