import { saveAccessToken } from "../Actions";

export const isLoggedIn = async (store) => {
    if (localStorage.getItem('auth')) {
        const token =localStorage.getItem('auth');
        await store.dispatch(saveAccessToken({token}))
        return store;
    } 
}
