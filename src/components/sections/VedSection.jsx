import vedFirstImage from '../../img/ved/ved_1.svg'
import vedSecondImage from '../../img/ved/ved_2.svg'
import vedThreeImage from '../../img/ved/ved_3.svg'
import vedFourImage from '../../img/ved/ved_4.svg'
import vedFiveImage from '../../img/ved/ved_5.svg'
import vedSixImage from '../../img/ved/ved_6.svg'

function VedSection(){
    return <section className="ved">
        <div className="ved__content">
            <div className="container  flex-container">
                <div className="ved__content_elem">
                    <img src={vedFirstImage} alt='балткомплект'/>
                        <h2>Правильный контракт</h2>
                        <p>Проверяем и даем реккомендации по составлению контракта с поставщиком, который не вызовет
                            нареканий со стороны таможни.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedSecondImage} alt='балткомплект'/>
                        <h2>Сбор документов</h2>
                        <p>Заключаем контракт с поставщиком и закупаем товар на свою компанию, привозим и продаем вам на
                            территории России. Вам не нужно становиться участником ВЭД.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedThreeImage} alt='балткомплект'/>
                        <h2>Технический импортер</h2>
                        <p>Объясним, как документы нужно оформить для ввоза груза, поможем пройти сертификацию товара и
                            собрать нужный комплект бумаг.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedFourImage} alt='балткомплект'/>
                        <h2>Прохождение таможни</h2>
                        <p>Оформляем декларацию и подаем, взаимодействуем с сотрудниками таможни и уведомляем Вас о
                            выпуске груза, Среднее время от подачи декларации до выпуска - 4 часа.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedFiveImage} alt='балткомплект'/>
                        <h2>Доставка товаров</h2>
                        <p>Подбираем выгодный способ доставки, заказываем транспорт и сопровождаем перевозку до точки
                            прибытия.</p>
                </div>
                <div className="ved__content_elem">
                    <img src={vedSixImage} alt='балткомплект'/>
                        <h2>Отчитываемся перед ФНС</h2>
                        <p>Сдаем налоговую отчетность в соотвествии с нормами ВЭД и избавляем Вас от необходимости
                            разбираться с международными финансами.</p>
                </div>
            </div>
        </div>
    </section>
}
export {VedSection}