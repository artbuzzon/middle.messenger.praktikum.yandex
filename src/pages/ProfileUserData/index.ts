import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile-user-data.scss';
import Form from "../../utils/Form";
import DOMWorker from "../../utils/DOMWorker";
import {getUuid} from "../../utils/utils";
import Input from "../../components/Input/input";
import {tmpl as InputTmpl} from "../../components/Input/input.tmpl";
import {ERROR_MSGS, INPUT_TYPES} from "../../utils/consts";
import '../../components/Input/input.scss';
import {tmpl as profileTmpl} from "./profile-user-data.tmpl";

const profilePage = new Form(profileTmpl, {
    btnUuid: getUuid()
})
DOMWorker.append('#root', profilePage.getContent());

const fields = [new Input(InputTmpl, {
    label: 'Почта',
    value: '',
    type: INPUT_TYPES.EMAIL,
    placeholder: '@ivanivanov',
    errorMessage: ERROR_MSGS.EMAIL,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Логин',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'login',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Имя',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'ivan',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Фамилия',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'ivanov',
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Имя в чате',
    value: '',
    placeholder: 'nickname',
    type: INPUT_TYPES.TEXT,
    errorMessage: ERROR_MSGS.TEXT,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Телефон',
    value: '',
    placeholder: 'phone',
    type: INPUT_TYPES.TEXT,
    errorMessage: ERROR_MSGS.PHONE,
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

DOMWorker.getEl(`[data-uuid="${profilePage.props.btnUuid}"]`)
    .addEventListener('click', (e) => {
        e.preventDefault()
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

