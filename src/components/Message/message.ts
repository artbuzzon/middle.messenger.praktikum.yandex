import Block from "../../utils/Block";
import {tmpl} from "./message.tmpl";
import DOMWorker from "../../utils/DOMWorker";
import {messages} from "../../utils/mocks";
import Baki from "../../utils/Baki";

class Message extends Block {
    constructor(props: Options) {
        super("div", tmpl, props);
    }

    render() {
        const containerEl = DOMWorker.createEl('div')
        messages.forEach(message => {
            const el = new Baki(this.tmpl).compileTemplate(message);
            if (message.type === 'incoming') {
                el.children[0].classList.add('dialog__body-msg-incoming')
            }
            containerEl.append(el)
        })
        return containerEl;
    }
}

export default Message;
