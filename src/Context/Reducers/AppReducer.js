import { SAVE_ACCESS_TOKEN, LOGOUT_USER } from "../Constant";

const AppReducer  = (state ={}, action) => {
    switch (action.type) {
        case SAVE_ACCESS_TOKEN:
            return state = {
                ...state,
                ...action.payload
            };
        case LOGOUT_USER: 
            return state = {};
        default:
            return state;
    }
};

export default AppReducer;