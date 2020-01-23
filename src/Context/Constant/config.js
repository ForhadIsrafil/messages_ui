export const baseURL =  'https://messages.family.net'
export const FourBaseURL = 'https://api.dev.family.net';
export const WEBURL = 'http://127.0.0.1:3000';
export const okta_url = 'https://dev-335783.oktapreview.com/oauth2/default/v1';
export const api = {
    endpoint: {
        signin: FourBaseURL + '/api/v1/signin',
        signup: FourBaseURL + '/api/v1/signup',
        msg_history: baseURL + '/last-10-history-list',
        contact_list: baseURL + '/contact-list',
        notification_list: baseURL + '/get-notifications',
        single_msg_history: baseURL + '/single-history/',
        forward_message: baseURL + '/forward-message/',
        single_chat_history: baseURL + '/accountnumbers/',
        create_number: baseURL + '/number',
        external_number: baseURL + '/external-number',
        single_external_number: baseURL + '/single-external-number/',
        delete_number: baseURL + '/delete-number/',
        create_callback_url: baseURL + '/change-callback-url',
        number_list: baseURL + '/number-list',
        send_msg: baseURL + '/sms',
        get_token: baseURL + '/get-access-token',
        okta_login: `${okta_url}/authorize?client_id=0oaj57i2s2hRdtpLW0h7&response_type=code&scope=openid&redirect_uri=${WEBURL}/authorization-code/callback&state=state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601&nonce=g5ly497e8ps%27`,
        web_number_list: WEBURL + '/number-list',
    }
};
