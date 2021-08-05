import Block from 'utils/Block';
import Baki from 'utils/Baki';
import './create-chat-modal.scss';
import DOMWorker from 'utils/DOMWorker';
import {chatsStore} from 'store/chat.store';

interface Options {
    [key: string]: any,
}

class CreateChatModal extends Block {
    constructor(tmpl: string, props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);

        DOMWorker.getEl('#root').addEventListener('click', (e) => {

            if (!e) {
                return;
            }

            if (!(e.target instanceof HTMLElement)) {
                return;
            }

            const nameEl = e.target.dataset.name;

            if (nameEl === 'create-chat-btn-modal') {
                const input = DOMWorker.getEl('[data-name="create-chat-input"]') as HTMLInputElement;
                const payload = {'title': input.value};
                chatsStore.createChat(payload);
            }


        });
    }

}

export default CreateChatModal;




