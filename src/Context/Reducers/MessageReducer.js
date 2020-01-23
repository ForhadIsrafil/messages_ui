import {MESSAGE_LIST, SEND_MESSAGE, LOGOUT_USER, SINGLE_MESSAGE, NUMBER_LIST, CLEAR_FAILED_STATUS,
     CONTACT_LIST, SIGNLE_CHAT_HISTORY, ROUTE_LIST} from "../Constant";

const MessageReducer = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE_LIST:
            return state = {
                ...state,
                messages: action.payload
            };

        case SEND_MESSAGE:
            return state = {
                ...state,
                new_message: action.payload
            };
        case LOGOUT_USER:
            localStorage.clear();
            return state = {};

        case SINGLE_MESSAGE:
            return state = {
                ...state,
                single_msg: action.payload
            };
        case NUMBER_LIST:
            return state = {
                ...state,
                numbers: action.payload
            };
        case ROUTE_LIST:
            return state = {
                ...state,
                routes: action.payload
            };
        case CONTACT_LIST:
            return state = {
                ...state,
                contacts: action.payload
            };
        case SIGNLE_CHAT_HISTORY:
            return state = {
                ...state,
                single_chat_histories: action.payload
            };
            
        case CLEAR_FAILED_STATUS:
            return state = {article_status: null};
        default:
            return state;
    }
};

export default MessageReducer;
