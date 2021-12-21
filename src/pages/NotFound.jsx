import {Link} from "react-router-dom";
import bg from '../img/404/center404.svg'
import bottom from '../img/404/bottom404.svg'
import {Header} from "../components/Header";
import {Helmet} from "react-helmet";

function NotFound() {
    
    return <>
        <Helmet
            title="Страница не найдена | 404"
            meta={[
                {
                    "name": "description",
                    "content": ""}
            ]}
        />
            <div className="content__404">
                <Header />
                <div className="container container__404 flex-container">
                    <h1>Извините, <br/>данная страница не существует или находится в разработке...</h1>
                    <Link className="btn btn__404 btn__blue_border" to='/' >На главную</Link >
                    <img className="center__img" src={bg} alt='балткомплект'/>
                    <img className="bottom__img" src={bottom}  alt='балткомплект'/>
                </div>
            </div>
        </>
}

export {NotFound};