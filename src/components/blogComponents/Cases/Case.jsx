import './cases.scss'
import {useState} from "react";

function Case({id, title, description, prevOpenCase, setPrevOpenCase}) {

    const [buttonToggle, setButtonToggle] = useState(false)

    const handleCaseComponent = () => {
        let caseComponent = document.querySelector(`.case__${id}`);
        let prevCaseComponent = document.querySelector(`.case__${prevOpenCase}`);

        setButtonToggle(!buttonToggle)
        caseComponent.classList.add('case-is-closed')

        if (buttonToggle === true){
            setTimeout(()=>{
                caseComponent.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                })
            },50)
        }
        // prevCaseComponent && prevCaseComponent.classList.remove('case-is-closed')
        // setPrevOpenCase(id)
    }

    return <>
        <div className={`case-container flex-container case__${id}`} >
            <div className="case-content" >
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
                    onClick={()=>handleCaseComponent()}
                    disabled={ description.length < 250 }
                >
                    {buttonToggle ? 'Скрыть' : 'Читать'}
                </button>
            </div>
        </div>
    </>
}

export {Case};