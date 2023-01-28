import React, {useState} from 'react';
import loadingImage from "../../../img/image-loading.svg";

const NewsItem = ({id, title, description, image, publish_date}) => {
    const [buttonToggle, setButtonToggle] = useState(false)
    const newDescription = description
        .replace(/(<([^>]+)>)/ig,"")
        .replace(/(&laquo;)/g, '"')
        .replace(/(&raquo;)/g, '"')
        .replace(/(&mdash;)/g, ' - ')

    const handleNewsComponent = () => {
        let caseComponent = document.querySelector(`.news__${id}`);
        setTimeout(()=>{
            setButtonToggle(!buttonToggle)
        }, 10)
        if (buttonToggle === true){
            caseComponent.scrollIntoView({
                // block: "center",
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className={`news-container container flex-container news__${id}`}  onClick={()=>handleNewsComponent()}>
            <img src={image ? image : loadingImage}  alt='case'/>
            <div className="news-content">
                <span style={{opacity: .5, marginBottom: '25px'}}>{publish_date.substr(0,10)}</span>
                <h2>{title}</h2>
                <p>{buttonToggle ? newDescription : newDescription.slice(0, 250)}</p>
                <button
                    onClick={()=>setButtonToggle(!buttonToggle)}
                >
                    {buttonToggle && newDescription.length > 250 ? 'Скрыть' : 'Читать'}

                </button>
            </div>
        </div>
    );
};

export default NewsItem;
