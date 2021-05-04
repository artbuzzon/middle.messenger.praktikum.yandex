import {ChatsAPI} from "../api/ChatApi";

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

    createChat(payload) {
        return new ChatsAPI().createChat(payload).then((xhr) => xhr.status)
            .catch((e) => {
                throw new Error(e)
            });
    },

    addUsersToChat(payload) {
        return new ChatsAPI().addUsersToChat(payload).then((xhr) => {
            if (xhr.status === 200) {
                this.state.user = JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    },

    deleteUsersFromChat(payload) {
        return new ChatsAPI().deleteUsersFromChat(payload)
    },

    getToken(chatId) {
        return new ChatsAPI().getToken(chatId).then((xhr) => {
            if (xhr.status === 200) {
                return JSON.parse(xhr.response);
            }
        }).catch((e) => {
            throw new Error(e)
        });
    }
}
