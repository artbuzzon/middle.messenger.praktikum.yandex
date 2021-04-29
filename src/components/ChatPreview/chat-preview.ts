import Block from "../../utils/Block";
import Baki from "../../utils/Baki";
import './chat-preview';
import {tmpl} from './chat-preview.tmpl'
import DOMWorker from "../../utils/DOMWorker";
import {store} from "../../store/chats.store";

class ChatPreview extends Block {
    constructor(props: Options) {
        super("div", tmpl, {foo: 'var', chats: store.chats});
    }

    componentDidMount(oldProps: Options) {
        setTimeout(() => {
            this.props.chats.push({
                time: '15:55',
                imgSrc: '',
                lastMessage: '!!!',
                messagesCount: 4,
                userName: 'профессор Мориарти',
            })
            this.setProps(this.props)
        }, 2000)
    }


    render() {
        const containerEl = DOMWorker.createEl('div')
        containerEl.setAttribute('data-component', 'chat-preview')

        if (DOMWorker.isInDom('[data-component="chat-preview"]')) {
            DOMWorker.getEl('[data-component="chat-preview"]').remove()
        }

        this.props.chats.forEach(chat => {
            containerEl.append(new Baki(this.tmpl).compileTemplate(chat))
        })
        return containerEl;
    }
}

export default ChatPreview;
