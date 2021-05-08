import {AuthAPI} from "../api/AuthApi";

interface Options {
    [key: string]: any,
}

export const authStore = {
    state: {
        userId: '',
        user: {
            id: ''
        }
    },
    signup(payload: Options) {
        return new AuthAPI().signup(payload).then((xhr) => {
            if (xhr.status === 200) {
                this.state.userId = JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    signin(payload: Options) {
        return new AuthAPI().signin(payload).then((xhr) => xhr.status)
            .catch((e) => {
                throw new Error(e)
            });
    },

    getUser() {
        return new AuthAPI().getUser().then((xhr) => {
            if (xhr.status === 200) {
                this.state.user = JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    logout() {
        return new AuthAPI().logout()
    },
}
