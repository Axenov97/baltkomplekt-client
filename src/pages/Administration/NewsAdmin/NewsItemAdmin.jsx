import './../admin.scss'
import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../App";
import {changeNews, fetchNews, removeNews} from "../../../http/NewsAPI";

const NewsItemAdmin = observer(({id, title, description}) => {

    const newDescription = description
            .replace(/(<([^>]+)>)/ig, '' )
            .replace(/(&laquo;)/g, '"')
            .replace(/(&raquo;)/g, '"')
            .replace(/(&mdash;)/g, ' - ')

    const {blog} = useContext(Context)
    const [openChange, setOpenChange] = useState(false)
    const [titleText, setTitleText] = useState(title)
    const [descriptionText, setDescriptionText] = useState(newDescription)

    const _changeNews = async () => {
        await changeNews(id, titleText, descriptionText).then(data => {
            setOpenChange(false)
        })
        fetchNews(blog.page).then(data=> {
            blog.setNews(data.rows)
            blog.setTotalCount(data.count)
        })
    }

    const deleteNews = async () => {
        const isAdmin = window.confirm("Вы действительно хотите безвозвратно удалить эту запись?");
        if (isAdmin){
            await removeNews(id)
            fetchNews(blog.page).then(data=> {
                blog.setNews(data.rows)
                blog.setTotalCount(data.count)
            })
        }
    }

    return <div className='blog-item-container flex-container'>
        <div className="blog-content">

            {openChange ?
                <textarea
                    className='blog-input blog-question-input'
                    value={titleText}
                    onChange={e=> setTitleText(e.target.value)}
                >
                {title}
                </textarea>
                : <h2>{title}</h2>
            }

            {openChange ?
                <textarea
                    className='blog-input blog-answer-input'
                    value={descriptionText}
                    onChange={e => setDescriptionText(e.target.value)}
                >
                    {newDescription}
                </textarea>
                :
                <p>{newDescription.slice(0, 250) + '...'}</p>
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
                onClick={ ()=>deleteNews() }
            >
                Удалить
            </button>
            {
                openChange ?
                    <button
                        className='btn btn__blue'
                        onClick={ ()=> _changeNews() }
                    >
                        Сохранить
                    </button>
                    : null
            }
        </div>
    </div>
})


export default NewsItemAdmin;