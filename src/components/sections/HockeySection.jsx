import {useNavigate} from "react-router-dom";

function HockeySection(){
    const navigator = useNavigate()

    return <section className="hockey">
        <div className="hockey__bg">
            <div className="flex-container">
                <div className="hockey__content">
                    <h3>Мы - дружный и надежный коллектив</h3>
                    <p>Балткомплект - надежный таможенный представитель из Санкт-Петербурга и очень слаженная
                        команда!</p>
                    <p>Наш коллектив показывает свой высокий уровень не только в таможенной сфере, но и на хоккейном
                        льду!</p>
                    {/*<button className="btn btn__red" onClick={()=>navigator('https://vk.com/hc_baltkomplekt')}>Узнать больше</button>*/}
                    {/*<button className="btn btn__white" onClick={()=>navigator('https://vk.com/hc_baltkomplekt')}>Наши социальные проекты</button>*/}
                </div>
            </div>
        </div>
    </section>
}
export {HockeySection}