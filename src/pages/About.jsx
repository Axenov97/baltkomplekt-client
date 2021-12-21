import {FirstSection} from "../components/sections/FirstSection";
import {ServicesSection} from "../components/sections/ServicesSection";
import {StuffSection} from "../components/sections/StuffSection";
import {BlogSection} from "../components/blogComponents/BlogSection";
import {useEffect} from "react";
import {BlogLinkGroup} from "../components/blogComponents/BlogLinkGroup";
import {HockeySection} from "../components/sections/HockeySection";
import {Helmet} from 'react-helmet';
import {ClientsSection} from "../components/sections/ClientsSection";

function About() {

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({behavior: 'smooth'}, 500)
    }, []);

    return <>
        <Helmet
            title="О нас | Балткомплект - надежный таможенный представитель | Таможенное оформление для юридических лиц"
            meta={[
                {
                    "name": "description",
                    "content": "Балткомплект - это таможенный представитель/брокер из Санкт-Петербурга. " +
                        "Мы занимаемся таможенным оформлением раличных грузов и товаров по всей России. " +
                        "Большой спектр услуг в сфере таможенного декларирования."
                }
            ]}
        />

        <FirstSection />
        <section className="about-us__section about-page__block">
            <div className="container">
                <h2>Балткомплект - проверенный таможенный брокер из Санкт-Петербурга</h2>
                <div className="about-us__content">
                    <div className="left-block">
                        <p>Мы предоставляем услуги связанные с таможенными процедурами с 2000 года. В 2003 г. наша
                            компания получила статус Действительного члена Региональной Ассоциации таможенных
                            представителей «Северо-Запад». А с ноября 2010 года вошла в состав «Гильдии профессиональных
                            участников рынка оказания услуг в области таможенного дела и внешнеэкономической
                            деятельности "ГЕРМЕС"». На сегодняшний день компания включена в «Реестр таможенных
                            представителей». Мы предоставляем свои услуги на Балтийской, Акцизной, Пулковской,
                            Санкт-Петербургской, Новороссийской, Белгородской, Ростовской и Владивостокской таможнях.
                            Наша фирма-представитель по таможенному оформлению готова оказать услуги в любых регионах
                            РФ.</p>

                        <div className="about-us__content_close">
                            <p>«Балткомплект» — таможенный представитель в России, пользующийся в Северо-Западном округе
                                наибольшим авторитетом и доверием клиентов. К нам за помощью обращаются различные
                                компании, занимающиеся внешнеэкономической деятельностью. Среди них — не только
                                коммерческие структуры, но и государственные предприятия.</p>

                            <p>Работая в своем рыночном сегменте с 2000 года, мы хорошо знаем, как решать те или иные
                                проблемы, научились делать это быстро и профессионально. Сочетание гибких цен на услуги,
                                оперативности всех работ и индивидуального подхода — вот характеризующие нашу работу
                                качества, благодаря которым число клиентов ООО «Балткомплект» постоянно растет.</p>
                        </div>
                    </div>
                    <div className="right-block">
                        <p>Мы — настоящие профессионалы своего дела, уже более тринадцати лет оказывающие услуги
                            таможенного представителя для юридических лиц. За это время ООО «Балткомплект»
                            зарекомендовала себя на рынке брокерских услуг как слаженная, ответственная и осознающая
                            степень своей ответственности перед клиентом, динамично развивающаяся компания с персоналом
                            из квалифицированных специалистов, способных помочь в решении любого вопроса, связанного с
                            таможенным оформлением как ввозимых, так и вывозимых грузов.</p>

                        <div className="about-us__content_close">
                            <p>В 2003 г. наша компания получила статус Действительного члена Региональной Ассоциации
                                таможенных представителей «Северо-Запад».</p>

                            <p>А с ноября 2010 года вошла в состав «Гильдии профессиональных участников рынка оказания
                                услуг в области таможенного дела и внешнеэкономической деятельности "ГЕРМЕС"».</p>
                        </div>
                    </div>
                </div>
                <button className="co-text">Читать далее...</button>
            </div>
        </section>
        <ClientsSection />
        <StuffSection />
        <ServicesSection />
        <BlogLinkGroup />
        <BlogSection />
        <HockeySection />
    </>
}

export {About};