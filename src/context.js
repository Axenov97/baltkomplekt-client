import { createContext, useReducer } from 'react';
import {reducer} from "./reducer";

export const ModalContext = createContext();

const initialState = {
    form: '',
    modalActive: false ,
    content: {
        name: '',
        phone: '',
        email: '',
        text: '',
        button: '',
    }
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.openModal = (form) => {
        dispatch({ type: 'OPEN_MODAL', payload: {form: form} })
    }
    value.closeModal = (form) => {
        dispatch({ type: 'CLOSE_MODAL', payload: {form: form}})
    }

    value.setFormContent = (content) => {
        dispatch({ type: 'SET_FORM_CONTENT', payload: {content: content}})
    }

    return <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
}