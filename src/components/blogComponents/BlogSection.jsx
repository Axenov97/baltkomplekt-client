import {Link} from "react-router-dom";
import {BlogLinkGroup} from "./BlogLinkGroup";

function BlogSection({location}) {

    return <>
        <div className="blog__bg">
            {!location.pathname.includes( 'blog') ? <BlogLinkGroup blogPage={"Блог"}/> : <></>}
            <section className="blog__section">
                <div className="container">
                    <div className="flex-container">
                        <div className="blog__elem">
                            <Link to='/blog/faq/'>
                                <h3>Ответы на популярные вопросы</h3>
                                <p>В чем отличия между таможенным брокером и таможенным представителем?</p>
                            </Link>
                        </div>
                        <div className="blog__elem">
                           <Link to='/blog/cases/'>
                               <h3>Интересные кейсы от “Балткомплект”</h3>
                               <p>
                                   <b>Входные данные:</b> Наша фирма хотела бы стать участником внешней экономической деятельности.
                                   С чего надо начать? Какие первые шаги сделать?
                               </p>
                               <p>
                                   <b>Решение:</b> Первыми шагами обычно являются поиск партнера за рубежом — поставщика или покупателя,
                                   а затем ведение с ним переговоров для того, чтобы заключить с ним контракт на поставку товаров . . .
                               </p>
                           </Link>
                        </div>
                        <div className="blog__elem">
                            <Link to='/blog/materials/'>
                                <h3>Таможенное декларирование грузов и товаров</h3>
                                <p>
                                    Законодательные нормы РФ предусматривают необходимость оформления ввозимых и вывозимых через госграницу товаров.
                                    В рамках такой процедуры, которая может называться декларированием, таможенной очисткой, заявитель подает . . .
                                </p>
                            </Link>
                        </div>
                        <div className="blog__elem">
                            <Link to='/blog/materials/'>
                                <h3>Тонкости таможенного оформления при международных перевозках</h3>
                                <p>
                                    Таможенное оформление — важный этап в осуществлении международных перевозок грузов.
                                    Он состоит из работы с государственными органами, множества формальных процедур . . .
                                </p>
                            </Link>
                        </div>
                        <div className="blog__elem">
                            <Link to='/blog/news/'>
                                <h3>Свежие новости</h3>
                                <p>Публикуем только самое интересное и важное в мире таможни</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export {BlogSection}