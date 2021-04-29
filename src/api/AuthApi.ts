import {BaseAPI} from "../utils/BaseApi";
import {HTTP} from "../utils/HTTP";

const authAPIInstance = new HTTP('/auth');

export class AuthAPI extends BaseAPI {
    signup(payload) {
        return authAPIInstance.post('/signup', payload);
    }

    signin(payload) {
        return authAPIInstance.post('/signin', payload);
    }

    getUser() {
        return authAPIInstance.get('/user');
    }

    logout() {
        return authAPIInstance.post('/logout');
    }
}
