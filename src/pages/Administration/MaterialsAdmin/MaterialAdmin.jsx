import '../admin.scss'
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../../../App";
import {changeMaterials, fetchMaterials, removeMaterials} from "../../../http/MaterialsAPI";

const MaterialAdmin = observer((props) => {
    const {id, title, description, file} = props
    const {blog} = useContext(Context)
    const [openChange, setOpenChange] = useState(false)
    const [titleText, setTitleText] = useState(title)
    const [descriptionText, setDescriptionText] = useState(description)
    const [document, setDocument] = useState(file)

    const changeMaterialFunc = async () => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('title', titleText)
        formData.append('description', descriptionText)
        formData.append('document', document)
        await changeMaterials(formData, id, title, description, file).then(data => setOpenChange(false))

        fetchMaterials().then(data=> {
            blog.setMaterials(data)
        })
    }

    const deleteMaterial = async () => {
        const isAdmin = window.confirm("Вы действительно хотите безвозвратно удалить эту запись?");
        if (isAdmin){
            await removeMaterials(id)
            fetchMaterials().then(data=> {
                blog.setMaterials(data)
            })
        }
    }

    const selectFile = e =>{
         setDocument(e.target.files[0])
    }

    return <div className='blog-item-container flex-container'>
        <div className="blog-content">
            {openChange ?
                <input
                    type='file'
                    className='blog-file-input'
                    onChange={selectFile}
                >
                </input>
                : null
            }

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
                onClick={ ()=> deleteMaterial() }
            >
                Удалить
            </button>
            {
                openChange ?
                    <button
                        className='btn btn__blue'
                        onClick={()=> changeMaterialFunc() }
                    >
                        Сохранить
                    </button>
                    : null
            }
        </div>
    </div>
})

export {MaterialAdmin};