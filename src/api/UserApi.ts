import {BaseAPI} from "../utils/BaseApi";
import {HTTP} from "../utils/HTTP";

const authAPIInstance = new HTTP('/user');

export class UserAPI extends BaseAPI {
    changeProfileData(payload) {
        return authAPIInstance.put('/profile', payload);
    }

    changeAvatar(payload) {
        return authAPIInstance.put('/profile/avatar', payload);
    }

    changePassword(payload) {
        return authAPIInstance.put('/password', payload);
    }

}
