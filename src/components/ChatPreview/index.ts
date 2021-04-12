import './chat-preview.scss';
import './chat-preview';
import ChatPreview from "./chat-preview";
import DOMWorker from "../../utils/DOMWorker";
import {tmpl} from './chat-preview.tmpl'
import {chats} from "../../utils/mocks";

chats.forEach(chat => {
    const chatPreview = new ChatPreview(tmpl, chat)
    DOMWorker.append('[data-name="chats-container"]', chatPreview.getContent());
})


