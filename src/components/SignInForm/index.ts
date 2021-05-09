import Block from '../../utils/Block';
import {tmpl as InputTmpl} from '../Input/input.tmpl';
import {ERROR_MSGS, INPUT_TYPES} from '../../utils/consts';
import {getUuid} from '../../utils/utils';
import DOMWorker from '../../utils/DOMWorker';
import Input from '../Input/input';
import {tmpl} from './signin-form.tmpl';
import {authStore} from '../../store/auth.store';

interface Options {
    [key: string]: any,
}

const fields = [new Input(InputTmpl, {
    label: 'Логин',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'login',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: 'login',
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: 'password',
    errorMessageUuid: getUuid(),
})];

export class SignInForm extends Block {
    constructor() {
        super('div', tmpl);
    }

    render() {
        const containerEl = DOMWorker.createEl('div');
        containerEl.setAttribute('data-component', 'signin-form');

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
            e.preventDefault();
            // @ts-ignore
            if (e.target.dataset.name === 'signin-form-btn') {
                let isFormValid = true;
                fields.forEach(field => {
                    if (!field._isValid) {
                        field.componentDidUpdate(field.props);
                        isFormValid = false;
                    }
                });
                if (isFormValid) {
                    const payload = this.preparePayload();
                    console.log(payload);
                    authStore.signin(payload).then((status) => {
                        if (status === 200) {
                            window.location.href = '/';
                        }
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
            payload[field.props.inputUuid] = field.props.value;
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
