import Block from "../../utils/Block";
import {tmpl as InputTmpl} from "../Input/input.tmpl";
import {ERROR_MSGS, INPUT_TYPES} from "../../utils/consts";
import {getUuid} from "../../utils/utils";
import DOMWorker from "../../utils/DOMWorker";
import Input from "../Input/input";
import {authStore} from "../../store/auth.store";
import {tmpl} from "./profile-user-data-form.tmpl";
import {userStore} from "../../store/user.store";

const fields = [new Input(InputTmpl, {
    label: 'Почта',
    value: '',
    type: INPUT_TYPES.EMAIL,
    placeholder: '@ivanivanov',
    errorMessage: ERROR_MSGS.EMAIL,
    inputUuid: 'email',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Логин',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'login',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: 'login',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Имя',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'ivan',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: 'first_name',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Фамилия',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'ivanov',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: 'second_name',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Имя в чате',
    value: '',
    placeholder: 'nickname',
    type: INPUT_TYPES.TEXT,
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: 'display_name',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Телефон',
    value: '',
    placeholder: 'phone',
    type: INPUT_TYPES.TEXT,
    errorMessage: ERROR_MSGS.PHONE,
    inputUuid: 'phone',
    errorMessageUuid: getUuid(),
})];

export class ProfileUserDataForm extends Block {
    constructor() {
        super("div", tmpl);
    }

    render() {
        const containerEl = DOMWorker.createEl('div')
        containerEl.setAttribute('data-component', 'profile-user-data-form')

        fields.forEach(input => {
            containerEl.append(input.getContent())
        })
        return containerEl;
    }

    setAvatar(url) {
        console.log(url)
        DOMWorker.getEl('#avatar').setAttribute('src', 'https://ya-praktikum.tech/api/v2' + url)
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);
        authStore.getUser();

        const rootEl = DOMWorker.getEl('#root');

        rootEl.addEventListener('blur', (e) => {
            this.updateValue(e);
        }, true)


        rootEl.addEventListener('submit', (e) => {
            e.preventDefault();

            const avatar = DOMWorker.getEl('#profile_pic');
            const formData = new FormData();
            formData.append('avatar', avatar.files[0]);

            let isFormValid = true;
            fields.forEach(field => {
                if (!field._isValid) {
                    field.componentDidUpdate(field.props)
                    isFormValid = false;
                }
            })
            if (isFormValid) {
                const payload = this.preparePayload()
                userStore.changeAvatar(formData);
                userStore.changeProfileData(payload).then(() => {
                    window.location.href = '/profile'
                })
            }
        })
    }

    preparePayload() {
        const payload = {}
        fields.forEach(field => {
            if (field.props.inputUuid === 'password_repeat') {
                return
            }
            payload[field.props.inputUuid] = field.props.value
        })
        return payload
    }

    updateValue(e: FocusEvent) {
        const target = e.target as HTMLInputElement;
        const inputField = fields.find(f => f.props.inputUuid === target.dataset.uuid);
        if (inputField) {
            inputField.props.value = target.value;
        }
    }

}
