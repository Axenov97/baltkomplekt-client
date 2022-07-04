import '../admin.scss'
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {changeFaq, fetchFaq, removeFaq} from "../../../http/FaqAPI";
import {Context} from "../../../App";

const FaqItemAdmin = observer(({id, question, answer}) => {

    const {blog} = useContext(Context)
    const [openChange, setOpenChange] = useState(false)
    const [questionText, setQuestionText] = useState(question)
    const [answerText, setAnswerText] = useState(answer)

    const changeFAQ = async () => {
        await changeFaq(id, questionText, answerText).then(data => {
            setOpenChange(false)
        })
        fetchFaq().then(data=> {
            blog.setFaq(data)
        })
    }

    const deleteFAQ = async () => {
        const isAdmin = window.confirm("Вы действительно хотите безвозвратно удалить эту запись?");
        if (isAdmin){
            await removeFaq(id)
            fetchFaq().then(data=> {
                blog.setFaq(data)
            })
        }
    }
    return <div className='blog-item-container flex-container'>
        <div className="blog-content">
            {openChange ?
                <textarea
                    className='blog-input blog-question-input'
                    value={questionText}
                    onChange={e=> setQuestionText(e.target.value)}
                >
                {question}
                </textarea>
                : <h2>{question}</h2>
            }

            {openChange ?
                <textarea
                    className='blog-input blog-answer-input'
                    value={answerText}
                    onChange={e => setAnswerText(e.target.value)}
                >
                    {answer}
                </textarea>
                : <p>{answer}</p>
            }
        </div>
        <div className="btn-group">
            <button
                className='btn btn__blue_border'
                onClick={()=>setOpenChange(!openChange)}
            >
                {openChange ? 'Отмена' : 'Изменить'}
            </button>

            <button
                className='btn btn__red'
                onClick={ ()=>deleteFAQ() }
            >
                Удалить
            </button>
            {
                openChange ?
                    <button
                        className='btn btn__blue'
                        onClick={ ()=> changeFAQ() }
                    >
                        Сохранить
                    </button>
                    : null
            }
        </div>
    </div>
})

export {FaqItemAdmin};