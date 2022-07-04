import '../admin.scss'
import React, {useContext, useState} from "react";
import {Context} from "../../../App";
import {createFaq, fetchFaq} from "../../../http/FaqAPI";
import {observer} from "mobx-react-lite";

const AddNewFaq = observer(() => {

    const {blog} = useContext(Context)
    const [addFAQ, setAddFAQ] = useState(false)
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const handleNewFaq = () => {
        setQuestion('')
        setAnswer('')
        setAddFAQ(!addFAQ)
    }

    const addNewFAQ = async () =>{
        await createFaq(question, answer).then(data => {
            setQuestion('')
            setAnswer('')
            setAddFAQ(false)
        })
        fetchFaq().then(data=> {
            blog.setFaq(data)
        })
        alert('Новая запись успешно создана')
    }

    return <>
        <button className='admin__btn' onClick={()=>handleNewFaq()}>
            { addFAQ ? 'Отмена' : 'Создать новый FAQ' }
        </button>
        {
            addFAQ ?
                <div className='blog-item-container flex-container'>
                    <div className="blog-content">
                        <textarea className='blog-input blog-question-input' placeholder='Заполните поле с вопросом' value={question} onChange={e=> setQuestion(e.target.value)}/>
                        <textarea className='blog-input blog-answer-input' placeholder='Заполните поле с ответом' value={answer} onChange={e=> setAnswer(e.target.value)}/>
                    </div>
                    <div className="btn-group">

                        <button
                            className={'btn btn__blue_border'}
                            onClick={()=>handleNewFaq()}
                        >
                            Отмена
                        </button>

                        <button
                            className={'btn btn__blue'}
                            onClick={()=>addNewFAQ()}
                            disabled={!question.length  || !answer.length }
                        >
                            Сохранить
                        </button>

                    </div>
                </div>
                : null
        }
    </>
})

export {AddNewFaq};