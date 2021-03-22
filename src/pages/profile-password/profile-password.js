import tmpl from './profile-password.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

const oldPassEl = document.querySelector('#old-pass');
const newPassEl = document.querySelector('#new-pass');
const repeatPassEl = document.querySelector('#repeat-pass');

const profilePassForm = document.querySelector(
    '[data-name="profile-password-form"]');
profilePassForm.onsubmit = (e) => {
  e.preventDefault();
  console.log({
    oldPass: oldPassEl.value,
    newPass: newPassEl.value,
    repeatNewPass: repeatPassEl.value,
  });
};
