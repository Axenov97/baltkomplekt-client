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
                overflowBody: document.body.style.overflowY = "scroll",
                paddingBody: document.body.style.paddingRight = "0px"
            }

        default:
            return state;
    }
}