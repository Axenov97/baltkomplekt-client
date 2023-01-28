import './faq.scss'
import {useState} from "react";

function Question({id, question, answer}) {

    const [buttonToggle, setButtonToggle] = useState(false)

    return <div className='question-container container flex-container'>
        <div className="faq-content">
            <h2>{question}</h2>
            <p>{buttonToggle ? answer : answer.substr(0, 250) + ' . . . '}</p>
        </div>
        <button
            className={buttonToggle ? 'btn btn__blue_border active' : 'btn btn__blue_border'}
            onClick={()=>setButtonToggle(!buttonToggle)}
            disabled={ answer.length < 250 }
        >
            {buttonToggle ? 'Скрыть ответ' : 'Читать ответ'}
        </button>
    </div>
}

export {Question};