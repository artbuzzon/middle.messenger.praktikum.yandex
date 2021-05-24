import Block from '../../utils/Block';
import {tmpl} from './message.tmpl';
import DOMWorker from '../../utils/DOMWorker';
import Baki from '../../utils/Baki';

interface Options {
    [key: string]: any,
}

class Message extends Block {
    constructor(props: Options) {
        super('div', tmpl, props);
    }

    render() {
        const containerEl = DOMWorker.createEl('div');
        console.log(this.props);
        if (!this.props.chats) return;

        this.props.chats.forEach((message: Options) => {
            console.log(message);
            const el = new Baki(this.tmpl).compileTemplate(message);
            console.log(el);
            // if (message.type === 'incoming') {
                el.children[0].classList.add('dialog__body-msg-incoming');
            // }
            containerEl.append(el);
        });
        return containerEl;
    }
}

export default Message;
