import advantagesFirstImage from '../../img/TO/advantages/1.svg'
import advantagesSecondImage from '../../img/TO/advantages/2.svg'
import advantagesThreeImage from '../../img/TO/advantages/3.svg'
import advantagesFourImage from '../../img/TO/advantages/4.svg'
import advantagesFiveImage from '../../img/TO/advantages/5.svg'

function AdvantagesSection(){
    return <section className="advantages">
        <div className="container">
            <h2>Наши Преимущества</h2>
        </div>
        <div className="advantages__bg">
            <div className="container">
                <div className="flex-container">
                    <div className="advantages__elem">
                        <img src={advantagesFirstImage} alt='балткомплект'/>
                            <div className="advanteges__elem_text">
                                <h5 className="advanteges__elem_bold">Полное Соотвествие законодательству</h5>
                                <p>Строгое соблюдение норм и правил таможенного кодекса РФ</p>
                            </div>
                    </div>
                    <div className="advantages__elem">
                        <img src={advantagesSecondImage} alt='балткомплект'/>
                            <div className="advanteges__elem_text">
                                <h5 className="advanteges__elem_bold">20 лет опыта</h5>
                                <p>Профессиональный подход и отлаженная работа с органами</p>
                            </div>
                    </div>
                    <div className="advantages__elem">
                        <img src={advantagesThreeImage} alt='балткомплект'/>
                            <div className="advanteges__elem_text">
                                <h5 className="advanteges__elem_bold">Нет ограничений по операциям</h5>
                                <p>Беремся за грузы и решаем задачи любой сложности</p>
                            </div>
                    </div>
                    <div className="advantages__elem">
                        <img src={advantagesFourImage} alt='балткомплект'/>
                            <div className="advanteges__elem_text">
                                <h5 className="advanteges__elem_bold">Индивидуальный подход</h5>
                                <p>Ваш персональный менеджер всегда на связи</p>
                            </div>
                    </div>
                    <div className="advantages__elem">
                        <img src={advantagesFiveImage} alt='балткомплект'/>
                            <div className="advanteges__elem_text">
                                <h5 className="advanteges__elem_bold">Оперативность и эффективность</h5>
                                <p>Подача и выпуск деклараций в день подачи</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export {AdvantagesSection}