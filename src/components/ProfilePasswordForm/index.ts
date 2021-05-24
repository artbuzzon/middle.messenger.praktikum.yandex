import Block from '../../utils/Block';
import {tmpl as InputTmpl} from '../Input/input.tmpl';
import {ERROR_MSGS, INPUT_TYPES} from '../../utils/consts';
import {getUuid, sanitizeHTML} from '../../utils/utils';
import DOMWorker from '../../utils/DOMWorker';
import Input from '../Input/input';
import {authStore} from '../../store/auth.store';
import {tmpl} from './profile-password-form.tmpl';

interface Options {
    [key: string]: any,
}

const fields = [new Input(InputTmpl, {
    label: 'Старый пассворд',
    value: '',
    type: INPUT_TYPES.PASS,
    placeholder: 'password',
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'oldPassword',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Новый пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'newPassword',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Повторите пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'password_repeat',
    errorMessageUuid: getUuid(),
})];

export class ProfilePasswordForm extends Block {
    constructor() {
        super('div', tmpl);
    }

    render() {
        const containerEl = DOMWorker.createEl('div');
        containerEl.setAttribute('data-component', 'signup-form');

        fields.forEach(input => {
            containerEl.append(input.getContent());
        });
        return containerEl;
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);

        const rootEl = DOMWorker.getEl('#root');

        rootEl.addEventListener('blur', (e) => {
            this.updateValue(e);
        }, true);


        rootEl.addEventListener('click', (e) => {
            // @ts-ignore
            if (e.target.dataset.name === 'signup-form-btn') {
                let isFormValid = true;
                fields.forEach(field => {
                    if (!field._isValid) {
                        field.componentDidUpdate(field.props);
                        isFormValid = false;
                    }
                });
                if (isFormValid) {
                    const payload = this.preparePayload();
                    authStore.signup(payload).then(() => {
                        window.location.href = '/profile';
                    });
                }
            }
        });
    }

    preparePayload() {
        const payload = {};
        fields.forEach(field => {
            if (field.props.inputUuid === 'password_repeat') {
                return;
            }
            // @ts-ignore
            payload[field.props.inputUuid] = sanitizeHTML(field.props.value);
        });
        return payload;
    }

    updateValue(e: FocusEvent) {
        const target = e.target as HTMLInputElement;
        const inputField = fields.find(f => f.props.inputUuid === target.dataset.uuid);
        if (inputField) {
            inputField.props.value = target.value;
        }
    }

}
