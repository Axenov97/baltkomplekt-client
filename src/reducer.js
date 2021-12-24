export function reducer(state, {type, payload}) {
    switch (type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modalActive: true,
                form: payload.form,
                overflowBody: document.body.style.overflowY = "hidden",
                paddingBody: document.body.style.paddingRight = "8px"
            }

        case 'CLOSE_MODAL':
            return {
                ...state,
                modalActive: false,
                form: payload.form,
                content: {
                    name: '',
                    phone: '',
                    email: '',
                    text: '',
                    button: '',
                },
                error: {
                    name: true,
                    phone: true,
                    email: true
                },
                dirty: {
                    name: false,
                    phone: false,
                    email: false
                },
                overflowBody: document.body.style.overflowY = "scroll",
                paddingBody: document.body.style.paddingRight = "0px"
            }

        case 'SET_FORM_CONTENT':
            return {
                ...state,
                content: payload.content
            }

        default:
            return state;
    }
}