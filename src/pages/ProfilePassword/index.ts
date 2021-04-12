import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile-password.scss';
import Form from "../../utils/Form";
import DOMWorker from "../../utils/DOMWorker";
import {getUuid} from "../../utils/utils";
import {tmpl as passwordTmpl} from "./profile-password.tmpl";
import Input from "../../components/Input/input";
import {tmpl as InputTmpl} from "../../components/Input/input.tmpl";
import {ERROR_MSGS, INPUT_TYPES} from "../../utils/consts";
import '../../components/Input/input.scss';


const passwordPage = new Form(passwordTmpl, {
    btnUuid: getUuid()
})
DOMWorker.append('#root', passwordPage.getContent());

const fields = [new Input(InputTmpl, {
    label: 'Старый пассворд',
    value: '',
    type: INPUT_TYPES.PASS,
    placeholder: 'password',
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Новый пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Повторите пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
    errorMessage: ERROR_MSGS.PASS,
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

DOMWorker.getEl(`[data-uuid="${passwordPage.props.btnUuid}"]`)
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

