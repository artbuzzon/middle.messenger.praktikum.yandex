import {ChatsAPI} from "../api/ChatApi";

interface Options {
    [key: string]: any,
}

export const chatsStore = {
    state: {
        chats: [],
        chatToken: '',
    },
    getChats() {
        return new ChatsAPI().getChats().then((xhr) => {
            if (xhr.status === 200) {
                this.state.chats = JSON.parse(xhr.response);
                return this.state.chats;
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    createChat(payload: string) {
        return new ChatsAPI().createChat(payload).then((xhr) => xhr.status)
            .catch((e) => {
                throw new Error(e)
            });
    },

    addUsersToChat(payload: string) {
        return new ChatsAPI().addUsersToChat(payload).then((xhr) => {
            if (xhr.status === 200) {
                this.state.user = JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    deleteUsersFromChat(payload: Options) {
        return new ChatsAPI().deleteUsersFromChat(payload)
    },

    getToken(chatId: Options) {
        return new ChatsAPI().getToken(chatId).then((xhr) => {
            if (xhr.status === 200) {
                return JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    }
}
