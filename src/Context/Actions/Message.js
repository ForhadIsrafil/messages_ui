import {
    MESSAGE_LIST, SEND_MESSAGE, SAVE_ACCESS_TOKEN, LOGOUT_USER, SINGLE_MESSAGE,
    FORWARD_MESSAGE, CREATE_NUMBER, NUMBER_LIST, CALLBACK_URL, CLEAR_FAILED_STATUS, SIGNIN, SIGNUP, DELETE_NUMBER,
    CONTACT_LIST, SIGNLE_CHAT_HISTORY, CREATE_EXTERNAL_NUMBER, ROUTE_LIST
} from "../Constant";
import {ApiHander} from "../Api/RestAPI";


export const SigninAction = (payload) => ({
    type: SIGNIN,
    payload
});
export const SignupAction = (payload) => ({
    type: SIGNUP,
    payload
});

export const MessageListAction = (payload) => ({
    type: MESSAGE_LIST,
    payload
});

export const SingleMessageAction = (payload) => ({
    type: SINGLE_MESSAGE,
    payload
});

export const NewMessageAction = (payload) => ({
    type: SEND_MESSAGE,
    payload
});

export const ForwardMessageAction = (payload) => ({
    type: FORWARD_MESSAGE,
    payload
});

export const CreateNumberAction = (payload) => ({
    type: CREATE_NUMBER,
    payload
});

export const CreateExternalNumberAction = (payload) => ({
    type: CREATE_EXTERNAL_NUMBER,
    payload
});

export const ChangeUrlAction = (payload) => ({
    type: CALLBACK_URL,
    payload
});

export const NumberListAction = (payload) => ({
    type: NUMBER_LIST,
    payload
});

export const RouteListAction = (payload) => ({
    type: ROUTE_LIST,
    payload
});

export const DeleteNumberAction = (payload) => ({
    type: DELETE_NUMBER,
    payload
});

export const saveAccessToken = (payload) => ({
    type: SAVE_ACCESS_TOKEN,
    payload
});

export const LogoutUser = () => ({
    type: LOGOUT_USER
});

// Clearing failer status
export const ClearStatus = () => ({
    type: CLEAR_FAILED_STATUS
});

export const ContactListAction = (payload) => ({
    type: CONTACT_LIST,
    payload
});

export const SignleChatHistoryAction = (payload) => ({
    type: SIGNLE_CHAT_HISTORY,
    payload
});

export const MessageList = () => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        ApiHander.MsgHistoryHander(token).then(res => {
            dispatch(MessageListAction(res));
        }, error => {
            if (error) {
                localStorage.clear();
                dispatch(saveAccessToken(
                    Object.assign(error.response.data, {status: error.response.status}))
                );
            } else {
                dispatch(saveAccessToken({status: 500}));
            }
        })
    }
};


export const SingleMessage = (id) => {
    return (dispatch, getState) => {

        const token = 'Bearer ' + getState().app.token;
        ApiHander.SingleMessageHandler(token, id).then(res => {
            dispatch(SingleMessageAction(res));
        }, error => {
            if (error) {
                localStorage.clear();
                dispatch(saveAccessToken(
                    Object.assign(error.response.data, {status: error.response.status}))
                );
            } else {
                dispatch(saveAccessToken({status: 500}));
            }
        })
    }
};

export const SendMessage = (payload) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        return new Promise((resolve, reject) => {
            ApiHander.SendMsgHander(payload, token).then(res => {
                dispatch(NewMessageAction({status: res.status, statusText: res.statusText}));
                resolve({status:  res.status})
            }, error => {
                resolve(error.response.data);
                if (error) {
                    // localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, {status: error.response.status}))
                    );
                } else {
                    dispatch(saveAccessToken({status: 500}));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({status: 500}));
                reject(error)
            })
        })
    }
};

export const ForwardMsg = (payload) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        return new Promise((resolve, reject) => {
            ApiHander.ForwardMsgHandler(payload, token).then(res => {
                dispatch(ForwardMessageAction({status: res.status, statusText: res.statusText}));
                resolve({status:  res.status})
            }, error => {
                resolve(error.response.data);
                if (error) {
                    // localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, {status: error.response.status}))
                    );
                } else {
                    dispatch(saveAccessToken({status: 500}));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({status: 500}));
                reject(error)
            })
        })
    }
};

export const CreateNumber = (payload) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        return new Promise((resolve, reject) => {
            ApiHander.NumberHandler(payload, token).then(res => {
                dispatch(CreateNumberAction({status: res.status, statusText: res.statusText}));
                resolve({status:  res.status})
            }, error => {
                resolve(error.response.data)
                if (error) {
                    // localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, {status: error.response.status}))
                    );
                } else {
                    dispatch(saveAccessToken({status: 500}));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({status: 500}));
                reject(error)
            })
        })
    }
};

export const CreateExternalNumber = (payload) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        return new Promise((resolve, reject) => {
            ApiHander.ExternalNumberHandler(payload, token).then(res => {
                dispatch(CreateExternalNumberAction({status: res.status, statusText: res.statusText}));
                resolve({status:  res.status})
            }, error => {
                resolve(error.response.data)
                if (error) {
                    // localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, {status: error.response.status}))
                    );
                } else {
                    dispatch(saveAccessToken({status: 500}));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({status: 500}));
                reject(error)
            })
        })
    }
};

export const CreateCallbackUrl = (payload) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        return new Promise((resolve, reject) => {
            ApiHander.CallbackHandler(payload, token).then(res => {
                dispatch(ChangeUrlAction({status: res.status, statusText: res.statusText}));
                resolve({status:  res.status})
            }, error => {
                resolve(error.response.data);
                if (error) {
                    // localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, {status: error.response.status}))
                    );
                } else {
                    dispatch(saveAccessToken({status: 500}));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({status: 500}));
                reject(error)
            })
        })
    }
};

export const NumberList = () => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        ApiHander.NumberListHandler(token).then(res => {
            dispatch(NumberListAction(res.results));
        }, error => {
            if (error) {
                dispatch(saveAccessToken(
                    Object.assign(error.response.data, {status: error.response.status}))
                );
            } else {
                dispatch(saveAccessToken({status: 500}));
            }
        })
    }
};

export const RouteLists = (system_number) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        ApiHander.RouteListHandler(token, system_number).then(res => {
            dispatch(RouteListAction(res.results));
        }, error => {
            if (error) {
                dispatch(saveAccessToken(
                    Object.assign(error.response.data, {status: error.response.status}))
                );
            } else {
                dispatch(saveAccessToken({status: 500}));
            }
        })
    }
};

export const getToken = (code) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            ApiHander.getTokenHander(code).then(res => {
                dispatch(saveAccessToken({token: res.data.session_token}));
                dispatch(saveAccessToken({id_token: res.data.session_token}));
                localStorage.setItem('auth', res.data.session_token);
                localStorage.setItem('id_token', res.data.session_token);
                resolve(true)
            }, error => {
                if (error) {
                    localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, {status: error.response.status}))
                    );
                    resolve(false)
                } else {
                    dispatch(saveAccessToken({status: 500}));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({status: 500}));
                resolve(false)
            })
        })
    }
};

export const UserSignin = (payload) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            ApiHander.signinHandler(payload).then(res => {
                
                dispatch(saveAccessToken({token: res.data.sessionToken}));
                dispatch(saveAccessToken({id_token: res.data.sessionToken}));
                localStorage.setItem('auth', res.data.sessionToken);
                localStorage.setItem('id_token', res.data.sessionToken);
                resolve({status: true})

            }, error => {
                resolve(error.response.data);
                if (error) {
                    localStorage.clear();
                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, { status: error.response.status }))
                    );
                    resolve(false)
                } else {
                    dispatch(saveAccessToken({ status: 500 }));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({ status: 500 }));
                resolve(false)
            })
        })
    }
};
export const UserSignup = (payload) => {
    return (dispatch, getState) => {

        return new Promise((resolve, reject) => {
            ApiHander.signupHandler(payload).then(res => {
                dispatch(SignupAction({ status: res.status, statusText: res.statusText }));
                resolve({ status: true })
            }, error => {
                resolve(error.response.data);
                if (error) {

                    dispatch(saveAccessToken(
                        Object.assign(error.response.data, { status: error.response.status }))
                    );
                } else {
                    dispatch(saveAccessToken({ status: 500 }));
                }
            }).catch((error) => {
                dispatch(saveAccessToken({ status: 500 }));
                reject(error)
            })
        })
    }
};

// export const DeleteNumber = (number_id) => {
//     return (dispatch, getState) => {
//         const token = 'Bearer ' + getState().app.token;
//         ApiHander.DeleteNumberHandler(token, number_id).then(res => {
//             dispatch(DeleteNumberAction(res.results));
//         }, error => {
//             if (error) {
//                 dispatch(saveAccessToken(
//                     Object.assign(error.response.data, {status: error.response.status}))
//                 );
//             } else {
//                 dispatch(saveAccessToken({status: 500}));
//             }
//         })
//     }
// };

export const ContactList = () => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        ApiHander.ContactListHandler(token).then(res => {
            dispatch(ContactListAction(res.results));
        }, error => {
            if (error) {
                dispatch(saveAccessToken(
                    Object.assign(error.response.data, {status: error.response.status}))
                );
            } else {
                dispatch(saveAccessToken({status: 500}));
            }
        })
    }
};

export const SignleChatHistory = (payload) => {
    return (dispatch, getState) => {
        const token = 'Bearer ' + getState().app.token;
        ApiHander.SignleChatHistoryHandler(token, payload).then(res => {
            dispatch(SignleChatHistoryAction(res.results));
        }, error => {
            if (error) {
                dispatch(saveAccessToken(
                    Object.assign(error.response.data, {status: error.response.status}))
                );
            } else {
                dispatch(saveAccessToken({status: 500}));
            }
        })
    }
};