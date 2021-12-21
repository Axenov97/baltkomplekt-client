import {useContext} from "react";
import {ModalContext} from "../../../context";

function AddNewsForm() {
    const {form} = useContext(ModalContext)

    return  <div className={form === 'modal__add-news' ? "modal-content modal__add-news active" : "modal-content modal__add-news"}>
        <h3>Добавить новость </h3>
        <form className="form-admin">
            <div className="form-group">
                <textarea type="text" className="form-control-start" name="Заголовок" placeholder="Заголовок новости" />
                <textarea type="text" className="form-control-start" name="Описание"
                          placeholder="Подробное описание новости" />
                <button type="submit" className="btn admin-btn">Добавить</button>
            </div>
        </form>
    </div>
}
export {AddNewsForm}