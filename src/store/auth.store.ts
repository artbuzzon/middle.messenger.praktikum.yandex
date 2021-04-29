import {AuthAPI} from "../api/AuthApi";

export const authStore = {
    state: {
        userId: '',
        user: {}
    },
    signup(payload) {
        return new AuthAPI().signup(payload).then((xhr) => {
            if (xhr.status === 200) {
                this.state.userId = JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    signin(payload) {
        return new AuthAPI().signin(payload).then((xhr) => xhr.status)
            .catch((e) => {
                throw new Error(e)
            });
    },

    getUser() {
        return new AuthAPI().getUser().then((xhr) => {
            if (xhr.status === 200) {
                this.state.user = JSON.parse(xhr.response);
                console.log(this.state.user)
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    logout() {
        return new AuthAPI().logout()
    },
}
