import tmpl from './profile-user-data.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';

new NodeCreator('#root', tmpl).createChild().insertToDom();

const emailEl = document.querySelector('#email');
const loginEl = document.querySelector('#login');
const nameEl = document.querySelector('#name');
const secondNameEl = document.querySelector('#second-name');
const nickNameEl = document.querySelector('#nick-name');
const phoneEl = document.querySelector('#phone');

const profileForm = document.querySelector('[data-name="profile-form"]');
profileForm.onsubmit = (e) => {
  e.preventDefault();
  console.log({
    email: emailEl.value,
    login: loginEl.value,
    name: nameEl.value,
    secondNameEl: secondNameEl.value,
    nickNameEl: nickNameEl.value,
    phoneEl: phoneEl.value,
  });
};
