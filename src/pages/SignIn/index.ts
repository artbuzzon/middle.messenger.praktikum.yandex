import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './signin.scss';
import DOMWorker from "../../utils/DOMWorker";
import {tmpl as signInTmpl} from "./signin.tmpl";
import {getUuid} from "../../utils/utils";
import Form from "../../utils/Form";
import Input from "../../components/Input/input";
import {tmpl as InputTmpl} from "../../components/Input/input.tmpl";
import {INPUT_TYPES} from "../../utils/consts";
import '../../components/Input/input.scss';

const signInPage = new Form(signInTmpl, {
    btnUuid: getUuid()
})
DOMWorker.append('#root', signInPage.getContent());

const fields = [new Input(InputTmpl, {
    label: 'Почта',
    value: '',
    type: INPUT_TYPES.EMAIL,
    placeholder: '@ivanivanov',
    errorMessage: 'Введите корректный email',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Логин',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'login',
    errorMessage: 'Логин должен содержать минимум 5 символов',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Имя',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'ivan',
    errorMessage: 'Имя должно содержать минимум 5 символов',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Фамилия',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'ivanov',
    errorMessage: 'Фамилия должна содержать минимум 5 символов',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Телефон',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'phone number',
    errorMessage: 'Введите корректный номер',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Пассворд',
    value: '',
    type: INPUT_TYPES.PASS,
    placeholder: 'password',
    errorMessage: 'Пассворд должен содержать минимум 8 символов и всякие знаки',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Пассворд (еще раз)',
    value: '',
    type: INPUT_TYPES.PASS,
    placeholder: 'password',
    errorMessage: 'Пассворд должен содержать минимум 8 символов и всякие знаки',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
})];

fields.forEach((field) => {
    DOMWorker.append('[data-name="fields-container"]', field.getContent());
})

DOMWorker.getEl(`#root`).addEventListener('blur', (e) => {
    updateValue(e);
}, true)

function updateValue(e: FocusEvent) {
    const target = e.target as HTMLInputElement;
    const inputField = fields.find(f => f.props.inputUuid === target.dataset.uuid);
    if (inputField) {
        inputField.props.value = target.value;
    }
}

DOMWorker.getEl(`[data-uuid="${signInPage.props.btnUuid}"]`)
    .addEventListener('click', (e) => {
        e.preventDefault();
        let isFormValid = true;
        fields.forEach(field => {
            if (!field._isValid) {
                field.componentDidUpdate(field.props)
                isFormValid = false;
            }
        })
        if (isFormValid) {
            location.href = 'index.html'
        }
    })
