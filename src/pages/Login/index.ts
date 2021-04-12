import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './login.scss';
import DOMWorker from "../../utils/DOMWorker";
import {tmpl as loginTmpl} from "./login.tmpl";
import {tmpl as InputTmpl} from "../../components/Input/input.tmpl";
import Input from "../../components/Input/input";
import '../../components/Input/input.scss';
import {getUuid} from "../../utils/utils";
import {INPUT_TYPES} from "../../utils/consts";
import Form from "../../utils/Form";

const loginPage = new Form(loginTmpl, {
    btnUuid: getUuid()
})
DOMWorker.append('#root', loginPage.getContent());

const fields = [new Input(InputTmpl, {
    label: 'Логин',
    value: '',
    type: INPUT_TYPES.TEXT,
    placeholder: 'login',
    errorMessage: 'Логин должен содержать минимум 5 символов',
    inputUuid: getUuid(),
    errorMessageUuid: getUuid(),
}), new Input(InputTmpl, {
    label: 'Пассворд',
    value: '',
    placeholder: 'password',
    type: INPUT_TYPES.PASS,
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

DOMWorker.getEl(`[data-uuid="${loginPage.props.btnUuid}"]`)
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


