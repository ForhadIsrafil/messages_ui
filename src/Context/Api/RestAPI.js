import { api } from "../Constant";
import BaseAPI from "./BaseAPI";

export class RestAPI extends BaseAPI {
    // Authentications
    signinHandler = ({ email, password }) => {
        let url = api.endpoint.signin;
        let payload = { email, password };
        return this.callAPI(url, 'post', payload)
    };

    signupHandler = ({firstname, lastname, email, password}) => {
        let url = api.endpoint.signup;
        let payload = { firstname, lastname, email, password };
        return this.callAPI(url, 'post', payload)
    };

    logoutHandler = (token) => {
        let url = api.endpoint.logout;
        return this.callAPI(url, 'post', {}, { headers: { Authorization: token } })
    };

    SendMsgHander = (payload, token) => {
        let url = api.endpoint.send_msg;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: token } })
    };

    ForwardMsgHandler = (payload, token) => {
        console.log('payload  ', payload);
        let url = api.endpoint.forward_message+payload.message_id;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: token } })
    };

    NumberHandler = (payload, token) => {
        let url = api.endpoint.create_number;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: token } })
    };

    ExternalNumberHandler = (payload, token) => {
        let url = api.endpoint.external_number;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: token } })
    };

    CallbackHandler = (payload, token) => {
        let url = api.endpoint.create_callback_url;
        return this.callAPI(url, 'post', payload, { headers: { Authorization: token } })
    };

    NumberListHandler = (token) => {
        let url = api.endpoint.number_list;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: token } })
    };

    RouteListHandler = (token, system_number) => {
        let url = api.endpoint.single_external_number + system_number;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: token } })
    };

    DeleteNumberHandler = (token, number_id) => {
        let url = api.endpoint.delete_number + number_id;
        return this.callAPI(url, 'delete', {}, { headers: { Authorization: token } })
    };

    MsgHistoryHander = (token) => {
        let url = api.endpoint.msg_history;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: token } })
    };

    ContactListHandler = (token) => {
        let url = api.endpoint.contact_list;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: token } })
    };

    SignleChatHistoryHandler = (token, payload) => {
        let url = api.endpoint.single_chat_history+payload.my_number+'/conversations/'+payload.contact_number;
        return this.callAPI(url, 'get', payload, { headers: { Authorization: token } })
    };

    SingleMessageHandler = (token, id) => {
        let url = api.endpoint.single_msg_history+id;
        return this.callAPI(url, 'get', {}, { headers: { Authorization: token } })
    };

    getTokenHander = (code) => {
        let request_data = { code: code };
        let url = api.endpoint.get_token;
        return this.callAPI(url, 'post', request_data)
    };

}

export const ApiHander = new RestAPI();

export default RestAPI;