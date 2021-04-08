import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile-password.scss';


import DOMWorker from "../../utils/DOMWorker";
import ProfilePassword from "./profile-password";
import {tmpl} from "./profile-password.tmpl";

const profilePassword = new ProfilePassword(tmpl)
DOMWorker.append('#root', profilePassword.getContent());

const oldPassEl = DOMWorker.getEl('#old-pass') as HTMLInputElement;
const newPassEl = DOMWorker.getEl('#new-pass') as HTMLInputElement;
const repeatPassEl = DOMWorker.getEl('#repeat-pass') as HTMLInputElement;

const profilePassForm = DOMWorker.getEl(
    '[data-name="profile-password-form"]');
profilePassForm.onsubmit = (e) => {
    e.preventDefault();
    console.log({
        oldPass: oldPassEl.value,
        newPass: newPassEl.value,
        repeatNewPass: repeatPassEl.value,
    });
};

