import documentIcon from '../../../img/blog/documentLogo.svg'
import downloadIcon from '../../../img/blog/downloadLogo.svg'
import fileSaver from 'file-saver'
import './materials.scss'

function MaterialsItem({title, description, document}) {

    const saveFile = () => fileSaver.saveAs(process.env.REACT_APP_API_URL + document, title);

    return <div className='materials-container container flex-container'>
        <img src={documentIcon} alt='icon'/>
        <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <button className='btn btn__blue_border btn-download' onClick={saveFile}>
            <img src={downloadIcon} alt='download'/>
            Скачать
        </button>
    </div>
}

export {MaterialsItem};