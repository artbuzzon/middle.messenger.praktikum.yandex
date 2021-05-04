import Block from "../../utils/Block";
import Baki from "../../utils/Baki";
import './chat-preview';
import {tmpl} from './chat-preview.tmpl'
import DOMWorker from "../../utils/DOMWorker";
import {chatsStore} from "../../store/chat.store";


class ChatPreview extends Block {
    constructor() {
        super("div", tmpl, {chats: []});
    }

    componentDidMount(oldProps: Options) {
        chatsStore.getChats().then((chats) => {
            chats.forEach(chat => {
                chat.last_message = JSON.parse(chat.last_message)
            })
            this.props.chats.push(...chats);
            this.setProps({chats: chats})
        })
    }


    render() {
        const containerEl = DOMWorker.createEl('div')
        containerEl.setAttribute('data-component', 'chat-preview')

        // if (DOMWorker.isInDom('[data-component="chat-preview"]')) {
        // DOMWorker.getEl('[data-component="chat-preview"]').remove()
        // }

        this.props.chats.forEach(chat => {
            containerEl.append(new Baki(this.tmpl).compileTemplate(chat))
        })
        return containerEl;
    }
}

export default ChatPreview;
