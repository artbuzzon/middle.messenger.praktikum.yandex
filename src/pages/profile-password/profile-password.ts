import tmpl from './profile-password.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';
import DOMWorker from "../../utils/DOMWorker";

new NodeCreator('#root', tmpl).createChild().insertToDom();

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
