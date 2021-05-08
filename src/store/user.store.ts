import {UserAPI} from "../api/UserApi";
interface Options {
    [key: string]: any,
}
export const userStore = {
    state: {
        user: {}
    },
    changeProfileData(payload: Options) {
        return new UserAPI().changeProfileData(payload)
            .then((xhr) => xhr)
            .catch((e) => {
                throw new Error(e)
            });
    },
    changeAvatar(payload: Options) {
        return new UserAPI().changeAvatar(payload)
            .then((xhr) => {
                this.state.user = xhr.response
            })
            .catch((e) => {
                throw new Error(e)
            });
    },
    changePassword(payload: Options) {
        return new UserAPI().changePassword(payload)
            .catch((e) => {
                throw new Error(e)
            });
    },

    getUser() {
        // @ts-ignore
        return new UserAPI().getUser().then((xhr) => {
            if (xhr.status === 200) {
                this.state.user = JSON.parse(xhr.response);
            }
        }).catch((e: Error) => {
            throw e
        });
    },


}
