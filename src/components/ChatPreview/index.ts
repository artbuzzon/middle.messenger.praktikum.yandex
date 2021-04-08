import './chat-preview.scss';
import './chat-preview';
import ChatPreview from "./chat-preview";
import DOMWorker from "../../utils/DOMWorker";
import {tmpl} from './chat-preview.tmpl'

const chatPreview = new ChatPreview(tmpl, {
    time: '12:48',
    imgSrc: '',
    lastMessage: 'Круто!',
    messagesCount: 4,
    userName: 'Вася',
})

DOMWorker.append('[data-name="chats-container"]', chatPreview.getContent());

