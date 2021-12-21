import '../admin.scss'
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {changeCases, fetchCases, removeCases} from "../../../http/CasesAPI";

const CaseAdmin = observer(({id, title, description}) => {
    const {blog} = useContext(Context)
    const [openChange, setOpenChange] = useState(false)
    const [titleText, setTitleText] = useState(title)
    const [descriptionText, setDescriptionText] = useState(description)

    const changeCase = async () => {
        await changeCases(id, titleText, descriptionText).then(data => {
            setOpenChange(false)
        })
        fetchCases().then(data=> {
            blog.setItemCases(data)
        })
    }

    const deleteCase = async () => {
        const isAdmin = window.confirm("Вы действительно хотите безвозвратно удалить эту запись?");
        if (isAdmin){
            await removeCases(id)
            fetchCases().then(data=> {
                blog.setItemCases(data)
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
                    {description}
                </textarea>
                : null
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
                onClick={ ()=>deleteCase() }
            >
                Удалить
            </button>
            {
                openChange ?
                    <button
                        className='btn btn__blue'
                        onClick={ ()=> changeCase() }
                    >
                        Сохранить
                    </button>
                    : null
            }
        </div>
    </div>
})

export {CaseAdmin};