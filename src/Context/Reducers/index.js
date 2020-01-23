import { combineReducers } from 'redux';
import AppReducer from "./AppReducer";
import MessageReducer from './MessageReducer';

export default combineReducers({
    app: AppReducer,
    message: MessageReducer
})
