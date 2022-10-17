import { loginAction } from '../../action';

const initialState = {
    isGoHome: false,
};


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginAction.GO_TO_HOME:
            return {
                ...state,
                isGoHome: true
            }
        default:
            return {
                ...state
            }
    }
}
