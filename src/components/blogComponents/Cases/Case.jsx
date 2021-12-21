import loadingImage from "../../../img/image-loading.svg";
import './cases.scss'
import {useState} from "react";

function Case({id, title, description, meta_title, meta_description, meta_keywords, meta_link}) {

    const [buttonToggle, setButtonToggle] = useState(false)

    return <>
        <div className='case-container flex-container' onClick={()=>setButtonToggle(!buttonToggle)}>
            <div className="content" >
                <h2>{title}</h2>
                <div
                    className='description-block'
                    dangerouslySetInnerHTML = {
                        buttonToggle ?
                            { __html: description}
                            :
                            { __html: description.substr(0, 250) + ' . . . '}
                    }
                />
                <button
                    onClick={()=>setButtonToggle(!buttonToggle)}
                    disabled={ description.length < 250 }
                >
                    {buttonToggle ? 'Скрыть' : 'Читать'}
                </button>
            </div>
        </div>
    </>
}

export {Case};