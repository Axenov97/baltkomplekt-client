import {CallbackForm} from "./CallbackForm";
import {TextForm} from "./TextForm";
import {ModalContext} from "../../context";
import {useContext} from 'react'
import {AddNewsForm} from "./adminModals/AddNewsForm";

function Modal() {
    const { closeModal, modalActive, form } = useContext(ModalContext)


    return <div className={modalActive ? 'modal-overlay active' : 'modal-overlay'} >
        <div className={modalActive ? 'modal active' : 'modal'} id={form} >
            <span className="close-modal" onClick={()=>closeModal(form)} />
            <TextForm />
            <CallbackForm />
            <AddNewsForm />
        </div>
    </div>
}
export {Modal}