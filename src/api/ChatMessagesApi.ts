import {BaseAPI} from "../utils/BaseApi";
import {HTTP} from "../utils/HTTP";

const chatMessagesAPIInstance = new HTTP('api/v1/messages');

class ChatMessagesAPI extends BaseAPI {
    request({id}) {
        return chatMessagesAPIInstance.get(`/${id}`);
    }
}
