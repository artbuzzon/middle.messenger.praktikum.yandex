import {BaseAPI} from '../utils/BaseApi';
import {HTTP} from '../utils/HTTP';

const authAPIInstance = new HTTP('/auth');

interface Options {
    [key: string]: any,
}

export class AuthAPI extends BaseAPI {
    signup(payload: Options) {
        return authAPIInstance.post('/signup', payload);
    }

    signin(payload: Options) {
        return authAPIInstance.post('/signin', {data: payload});
    }

    getUser() {
        return authAPIInstance.get('/user');
    }

    logout() {
        return authAPIInstance.post('/logout');
    }
}
