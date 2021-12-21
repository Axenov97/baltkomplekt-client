import aboutImage from '../../img/about.webp'
import {useState} from 'react'

function AboutUsSection(){
    const [activeText, setActiveText] = useState(false)

    return <section className="about-us__section">
            <div className="container">
                <div className="flex-container">
                    <div className="about-us__image">
                        <img src={aboutImage} alt="Таможенное оформление" />
                    </div>
                    <div className="about-us__content">
                        <h2>О нас</h2>
                        <p>«Балткомплект» — таможенный представитель/брокер в России с 20-летним опытом работы.</p>
                        <div className={activeText ? 'about-us__content_close active' : 'about-us__content_close'}>
                            <p>Предоставляем услуги по всей России. Работаем на Балтийской, Акцизной, Пулковской,
                                Санкт-Петербургской, Новороссийской, Белгородской, Ростовской и Владивостокской
                                таможнях.</p>
                            <p>Мы пользуемся в Северо-Западном округе наибольшим авторитетом и доверием клиентов. К нам
                                за помощью обращаются различные организации, занимающиеся внешнеэкономической
                                деятельностью:
                                <br/> <b>юридические лица, коммерческие структуры, государственные предприятия.</b></p>
                            <p>Наша компания внесена в «Реестр таможенных представителей». </p>
                            <p>В 2003 г. наша компания получила статус Действительного члена Региональной Ассоциации
                                таможенных представителей «Северо-Запад».</p>
                            <p>А с ноября 2010 года вошла в состав «Гильдии профессиональных участников рынка оказания
                                услуг в области таможенного дела и внешнеэкономической деятельности "ГЕРМЕС"».</p>
                        </div>
                    </div>
                    <button className="co-text" onClick={()=> setActiveText(!activeText)} >
                        {activeText ? 'Скрыть' : 'Читать далее...'}
                    </button>
                </div>
            </div>
        </section>
}
export {AboutUsSection}