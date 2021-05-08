import {BaseAPI} from "../utils/BaseApi";
import {HTTP} from "../utils/HTTP";

interface Options {
    [key: string]: any,
}

const authAPIInstance = new HTTP('/user');

export class UserAPI extends BaseAPI {
    changeProfileData(payload: Options) {
        return authAPIInstance.put('/profile', payload);
    }

    changeAvatar(payload: Options) {
        return authAPIInstance.put('/profile/avatar', payload);
    }

    changePassword(payload: Options) {
        return authAPIInstance.put('/password', payload);
    }

}
