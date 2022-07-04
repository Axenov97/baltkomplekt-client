import {CallbackForm} from "./CallbackForm";
import {TextForm} from "./TextForm";
import {ModalContext} from "../../context";
import {useContext} from 'react'

function Modal() {
    const { closeModal, modalActive, form } = useContext(ModalContext)

    return <div className={modalActive ? 'modal-overlay active' : 'modal-overlay'} >
        <div className={modalActive ? 'modal active' : 'modal'} id={form} >
            <span className="close-modal" onClick={()=>closeModal(form)} />
            <TextForm />
            <CallbackForm />
        </div>
    </div>
}
export {Modal}