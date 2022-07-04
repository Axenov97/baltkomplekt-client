import '../admin.scss'
import React, {useContext, useState} from "react";
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";
import {createMaterials, fetchMaterials} from "../../../http/MaterialsAPI";

const AddMaterials = observer(() => {

    const {blog} = useContext(Context)
    const [addMaterials, setAddMaterials] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [document, setDocument] = useState(null)

    const handleMaterials = () => {
        setTitle('')
        setDescription('')
        setAddMaterials(!addMaterials)
    }

    const addNewMaterials = async () =>{
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('description', description)
            formData.append('document', document)
            await createMaterials(formData).then(data => setAddMaterials(false))

            await fetchMaterials().then(data=> {
                blog.setMaterials(data)
            })
            alert('Новая запись успешно создана')
        }catch (e) {
            alert('Одно из полей не заполнено')
        }
    }
    const selectFile = e =>{
        setDocument(e.target.files[0])
    }
    return <>
        <button className='admin__btn' onClick={()=>handleMaterials()}>
            { addMaterials ? 'Отмена' : 'Добавить новый справочный материал' }
        </button>
        {
            addMaterials ?
                <div className='blog-item-container flex-container'>
                    <div className="blog-content">
                        <input
                            type='file'
                            className='blog-file-input'
                            onChange={selectFile}
                        >
                        </input>
                        <textarea className='blog-input blog-question-input' placeholder='Заполните поле заголовок' value={title} onChange={e=> setTitle(e.target.value)}/>
                        <textarea className='blog-input blog-answer-input' placeholder='Заполните поле описание' value={description} onChange={e=> setDescription(e.target.value)}/>
                    </div>
                    <div className="btn-group">

                        <button
                            className={'btn btn__blue_border'}
                            onClick={()=>handleMaterials()}
                        >
                            Отмена
                        </button>

                        <button
                            className={'btn btn__blue'}
                            onClick={()=>addNewMaterials()}
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

export {AddMaterials};