import {BaseAPI} from '../utils/BaseApi';
import {HTTP} from '../utils/HTTP';

interface Options {
    [key: string]: any,
}

const chatAPIInstance = new HTTP('/chats');

export class ChatsAPI extends BaseAPI {
    getChats() {
        return chatAPIInstance.get('');
    }

    createChat(payload: string) {
        return chatAPIInstance.post('', {data: payload});
    }

    addUsersToChat(payload: string) {
        return chatAPIInstance.put('/users', {data: payload});
    }

    deleteUsersFromChat(payload: Options) {
        return chatAPIInstance.delete('/users', {data: payload});
    }
    getToken(chatId: Options) {
        return chatAPIInstance.post('/token/' + chatId);
    }
}
