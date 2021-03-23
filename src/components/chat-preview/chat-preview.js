import {NodeCreator} from '../../utils/NodeCreator';
import tmpl from './chat-preview.tmpl';
import {chats} from '../../utils/mocks';

const chatNode = new NodeCreator('[data-name="chats-container"]',
    tmpl);
chats.forEach((chat) => {
  chatNode.createChild(chat);
});
chatNode.insertToDom();
