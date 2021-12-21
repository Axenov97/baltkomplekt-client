import '../admin.scss'
import React, {useContext, useState} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {createCases, fetchCases} from "../../../http/CasesAPI";

const AddNewCase = observer(() => {

    const {blog} = useContext(Context)
    const [addCase, setAddCase] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleCase = () => {
        setTitle('')
        setDescription('')
        setAddCase(!addCase)
    }

    const addNewCase = async () => {
        await createCases(title, description).then(data => {
            setTitle('')
            setDescription('')
            setAddCase(false)
        })
        fetchCases().then(data=> {
            blog.setItemCases(data)
        })
        alert('Новая запись успешно создана')
    }

    return <>
        <button className='admin__btn' onClick={()=>handleCase()}>
            { addCase ? 'Отмена' : 'Создать новый кейс' }
        </button>
        {
            addCase ?
                <div className='blog-item-container flex-container'>
                    <div className="blog-content">
                        <textarea className='blog-input blog-question-input' placeholder='Заполните заголовок' value={title} onChange={e=> setTitle(e.target.value)}/>
                        <textarea className='blog-input blog-answer-input' placeholder='Заполните описание' value={description} onChange={e=> setDescription(e.target.value)}/>
                    </div>
                    <div className="btn-group">

                        <button
                            className={'btn btn__blue_border'}
                            onClick={()=>handleCase()}
                        >
                            Отмена
                        </button>

                        <button
                            className={'btn btn__blue'}
                            onClick={()=>addNewCase()}
                            disabled={!title.length  || !description.length }
                        >
                            Сохранить
                        </button>

                    </div>
                </div>
                : null
        }
    </>
})

export {AddNewCase};