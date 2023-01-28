import {useNavigate} from "react-router-dom";
import bg from './../../img/hockey_bg.jpg'
function HockeySection(){
    const navigator = useNavigate()

    return <section className="hockey">
        <div className="flex-container">
            <div className="hockey__content">
                <h3>Балткомплект - дружный и надежный коллектив</h3>
                <p>Наш коллектив показывает свой высокий уровень не только в <br/><b>сфере таможени</b> но и на хоккейном льду!</p>
                <button className="btn btn__black_border" onClick={()=>navigator('/about/')}>Наши социальные проекты</button>
                <img src={bg}/>
            </div>
        </div>
    </section>
}
export {HockeySection}