import {UserAPI} from '../api/UserApi';
interface Options {
    [key: string]: any,
}
export const userStore = {
    state: {
        user: {}
    },
    changeProfileData(payload: Options): Promise<XMLHttpRequest> {
        return new UserAPI().changeProfileData(payload)
            .then((xhr) => xhr)
            .catch((e) => {
                throw new Error(e);
            });
    },
    changeAvatar(payload: Options): Promise<XMLHttpRequest> {
        return new UserAPI().changeAvatar(payload)
            .then((xhr) => {
               this.state.user = xhr.response;
               return xhr.response;
            })
            .catch((e) => {
                throw new Error(e);
            });
    },
    changePassword(payload: Options): Promise<XMLHttpRequest> {
        return new UserAPI().changePassword(payload)
            .catch((e) => {
                throw new Error(e);
            });
    },

};
