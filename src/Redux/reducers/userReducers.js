import { AUTH } from '../type'

const initialState = {
    auth: true,
}

export default function (state = initialState, actions) {
    switch (actions.type) {
        case AUTH:
            return {
                ...state,
                auth: actions.payload,
            }

        default:
            return state

    }
}