import {BaseAPI} from "../utils/BaseApi";
import {HTTP} from "../utils/HTTP";

const chatAPIInstance = new HTTP('api/v1/chats');

class ChatAPI extends BaseAPI {
    create() {
        return chatAPIInstance.post('/', {title: 'string'});
    }

    request() {
        return chatAPIInstance.get('/full');
    }
}
