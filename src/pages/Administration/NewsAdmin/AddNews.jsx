import '../admin.scss'
import React, {useContext, useState} from "react";
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";
import {createNews, fetchNews} from "../../../http/NewsAPI";

const AddNews = observer(() => {

    const {blog} = useContext(Context)
    const [addNews, setAddNews] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleNews = () => {
        setTitle('')
        setDescription('')
        setAddNews(!addNews)
    }

    const addNewNews = async () =>{
        await createNews(title, description, 'description_2', 'description_3', 'keywords').then(data => {
            setTitle('')
            setDescription('')
            setAddNews(false)
        })
        fetchNews(blog.page).then(data=> {
            blog.setNews(data.rows)
            blog.setTotalCount(data.count)
        })
        alert('Новая запись успешно создана')
    }

    return <>
        <button className='admin__btn' onClick={()=>handleNews()}>
            { addNews ? 'Отмена' : 'Создать новость' }
        </button>
        {
            addNews ?
                <div className='blog-item-container flex-container'>
                    <div className="blog-content">
                        <textarea className='blog-input blog-question-input' placeholder='Заполните поле заголовок' value={title} onChange={e=> setTitle(e.target.value)}/>
                        <textarea className='blog-input blog-answer-input' placeholder='Заполните поле описание' value={description} onChange={e=> setDescription(e.target.value)}/>
                    </div>
                    <div className="btn-group">

                        <button
                            className={'btn btn__blue_border'}
                            onClick={()=>handleNews()}
                        >
                            Отмена
                        </button>

                        <button
                            className={'btn btn__blue'}
                            onClick={()=>addNewNews()}
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

export {AddNews};