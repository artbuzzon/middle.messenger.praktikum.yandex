import {BaseAPI} from "../utils/BaseApi";
import {HTTP} from "../utils/HTTP";

const chatAPIInstance = new HTTP('/chats');

export class ChatsAPI extends BaseAPI {
    getChats() {
        return chatAPIInstance.get('');
    }

    createChat(payload) {
        return chatAPIInstance.post('', {data: payload});
    }

    addUsersToChat(payload) {
        return chatAPIInstance.put('/users', {data: payload})
    }

    deleteUsersFromChat(payload) {
        return chatAPIInstance.delete('/users', {data: payload})
    }
    getToken(chatId) {
        return chatAPIInstance.post('/token/' + chatId)
    }
}
