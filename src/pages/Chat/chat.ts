import Block from "../../utils/Block";
import Baki from "../../utils/Baki";
import {tmpl as chatTmpl} from "./chat.tmpl";
import '../../styles/mixins.scss';
import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './chat.scss';
import {authStore} from "../../store/auth.store";
import DOMWorker from "../../utils/DOMWorker";
import CreateUserModal from "../../components/CreateUserModal/create-user-modal";
import {tmpl as createModalTmpl} from "../../components/CreateUserModal/create-user-modal.tmpl";
import DeleteUserModal from "../../components/DeleteUserModal/delete-user-modal";
import {tmpl as deleteModalTmpl} from "../../components/DeleteUserModal/delete-user-modal.tmpl";
import {tmpl as createChatModalTmpl} from "../../components/CreateChatModal/create-chat-modal.tmpl";
import CreateChatModal from "../../components/CreateChatModal/create-chat-modal";
import {chatsStore} from "../../store/chat.store";
import {getSocketConnection} from "../../api/SocketApi";
import Message from "../../components/Message/message";


class Chat extends Block {
    socket: null;

    constructor(props: Options = {}) {
        super('div', chatTmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);
        authStore.getUser();

        DOMWorker.getEl('#root').addEventListener('click', (e) => {
            const nameEl = e.target.dataset.name;

            if (nameEl === 'add-user') {
                const createUserModal = new CreateUserModal(createModalTmpl)
                DOMWorker.append('#root', createUserModal.getContent());
            } else if (nameEl === 'delete-user') {
                const deleteUserModal = new DeleteUserModal(deleteModalTmpl)
                DOMWorker.append('#root', deleteUserModal.getContent());
            } else if (nameEl === 'user-modal-mask') {
                DOMWorker.getEl('[data-name="user-modal"]').remove()
            } else if (nameEl === 'create-chat-btn') {
                const createChatModal = new CreateChatModal(createChatModalTmpl)
                DOMWorker.append('#root', createChatModal.getContent());
            } else if (nameEl === 'chat-preview' || e.target.parentNode.parentNode.dataset.name === 'chat-preview') {


                const messagesParentEl = DOMWorker.getEl('.dialog__body');
                if (messagesParentEl.children[0]) {
                    messagesParentEl.children[0].remove();
                }

                const chatId = e.target.dataset.chatId || e.target.parentNode.parentNode.dataset.chatId; //TODO refactor
                const userId = authStore.state.user.id;
                chatsStore.getToken(chatId).then(({token}) => {
                    this.socket = getSocketConnection(userId, chatId, token);
                    console.log(userId, chatId, token)
                    this.socket.addEventListener('open', (e) => {
                        console.log('Соединение установлено');

                        // socket.send(JSON.stringify({
                        //     content: 'Моё третье сообщение миру!',
                        //     type: 'message',
                        // }));
                        this.socket.send(JSON.stringify({
                            content: '0',
                            type: 'get old',
                        }));
                    });


                    this.socket.addEventListener('close', event => {
                        if (event.wasClean) {
                            console.log('Соединение закрыто чисто');
                        } else {
                            console.log('Обрыв соединения');
                        }

                        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
                    });

                    this.socket.addEventListener('message', event => {
                        console.log('Получены данные', event.data);
                        console.log(JSON.parse(event.data))

                        const data = JSON.parse(event.data)
                        const chats = Array.isArray(data) ? data : [data]
                        messagesParentEl.append(new Message({chats}).getContent())
                    });

                    this.socket.addEventListener('error', event => {
                        console.log('Ошибка', event.message);
                    });
                })
            } else if (nameEl === 'send-msg-btn') {
                const inputEl = DOMWorker.getEl('[data-name="message-input"]');
                console.log(inputEl.value)
                if (inputEl.value) {
                    this.socket.send(JSON.stringify({
                        content: inputEl.value,
                        type: 'message',
                    }));
                    inputEl.value = '';
                }
            }
        })
    }


}

export default Chat;
