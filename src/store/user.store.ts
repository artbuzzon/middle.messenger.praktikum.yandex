import {UserAPI} from "../api/UserApi";

export const userStore = {
    state: {
        user: {}
    },
    changeProfileData(payload) {
        return new UserAPI().changeProfileData(payload)
            .then((xhr) => xhr)
            .catch((e) => {
                throw new Error(e)
            });
    },
    changeAvatar(payload) {
        return new UserAPI().changeAvatar(payload)
            .then((xhr) => {
                this.state.user = xhr.response
            })
            .catch((e) => {
                throw new Error(e)
            });
    },
    changePassword(payload) {
        return new UserAPI().changePassword(payload)
            .catch((e) => {
                throw new Error(e)
            });
    },

    getUser() {
        return new UserAPI().getUser().then((xhr) => {
            if (xhr.status === 200) {
                this.state.user = JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },


}
