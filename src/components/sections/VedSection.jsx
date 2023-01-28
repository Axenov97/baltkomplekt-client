import vedFirstImage from '../../img/ved/ved_1.svg'
import vedSecondImage from '../../img/ved/ved_2.svg'
import vedThreeImage from '../../img/ved/ved_3.svg'
import vedFourImage from '../../img/ved/ved_4.svg'
import vedFiveImage from '../../img/ved/ved_5.svg'
import vedSixImage from '../../img/ved/ved_6.svg'

function VedSection(){
    return <section className="ved-section">
        <div className="ved__content">
            <h2>Как мы работаем?</h2>
            <div className="container flex-container">
                <div className="ved__content_elem">
                    <img src={vedFirstImage} alt='балткомплект'/>
                        <h3>Правильный контракт</h3>
                        <p>Проверяем и даем реккомендации по составлению контракта с поставщиком, который не вызовет
                            нареканий со стороны таможни.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedSecondImage} alt='балткомплект'/>
                        <h3>Подготовка документов</h3>
                        <p>Заключаем контракт с поставщиком и закупаем товар на свою компанию, привозим и продаем вам на
                            территории России. Вам не нужно становиться участником ВЭД.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedThreeImage} alt='балткомплект'/>
                        <h3>Технический импортер</h3>
                        <p>Объясним, как документы нужно оформить для ввоза груза, поможем пройти сертификацию товара и
                            собрать нужный комплект бумаг.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedFourImage} alt='балткомплект'/>
                        <h3>Прохождение таможни</h3>
                        <p>Оформляем декларацию и подаем, взаимодействуем с сотрудниками таможни и уведомляем Вас о
                            выпуске груза, Среднее время от подачи декларации до выпуска - 4 часа.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedFiveImage} alt='балткомплект'/>
                        <h3>Доставка товаров</h3>
                        <p>Подбираем выгодный способ доставки, заказываем транспорт и сопровождаем перевозку до точки
                            прибытия.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedSixImage} alt='балткомплект'/>
                        <h3>Отчитываемся перед ФНС</h3>
                        <p>Сдаем налоговую отчетность в соотвествии с нормами ВЭД и избавляем Вас от необходимости
                            разбираться с международными финансами.</p>
                </div>
            </div>
        </div>
    </section>
}
export {VedSection}