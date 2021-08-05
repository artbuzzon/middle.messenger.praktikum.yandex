import Block from 'utils/Block';
import Baki from 'utils/Baki';
import './create-user-modal.scss';
import DOMWorker from 'utils/DOMWorker';
import {chatsStore} from 'store/chat.store';

interface Options {
    [key: string]: any,
}

class CreateUserModal extends Block {
    constructor(tmpl: string, props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);

        DOMWorker.getEl('#root').addEventListener('click', (e) => {

            if (!e.target) {
                return;
            }

            if (!(e.target instanceof HTMLButtonElement)) {
                return;
            }

            const nameEl = e.target.dataset.name;

            if (nameEl === 'create-user-btn') {
                const input = DOMWorker.getEl('[data-name="create-user-input"]') as HTMLInputElement;
                const payload = {
                    users: [
                        input.value
                    ],
                    chatId: 0 //TODO
                };
                chatsStore.addUsersToChat(JSON.stringify(payload));
            }


        });
    }

}

export default CreateUserModal;




