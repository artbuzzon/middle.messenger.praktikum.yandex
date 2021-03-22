import {NodeCreator} from '../../utils/NodeCreator';
import tmpl from './chat-actions-dropdown.tmpl';

new NodeCreator('[data-name="chat-actions"]',
    tmpl).createChild().insertToDom();

const chatActionsEl = document.querySelector('[data-name="chat-actions"]');
const dropdown = document.querySelector('[data-name="chat-actions-dropdown"]');
const chatActionsDropdownMask = document.querySelector(
    '[data-name="chat-actions-mask"]');
const addUserModal = document.querySelector(
    '[data-name="create-user-modal"]');
const addUserModalMask = document.querySelector(
    '[data-name="create-user-modal-mask"]');
const chatDropdownAddUserBtnEL = document.querySelector(
    '[data-name="chat-dropdown__add-user"]');

dropdown.hidden = true;
chatActionsDropdownMask.hidden = true;
addUserModal.hidden = true;

chatActionsDropdownMask.addEventListener('click', (e) => {
  dropdown.hidden = true;
  chatActionsDropdownMask.hidden = true;
  e.stopPropagation();
});

chatActionsEl.addEventListener('click', (e) => {
  dropdown.hidden = false;
  chatActionsDropdownMask.hidden = false;
  e.stopPropagation();
});

chatDropdownAddUserBtnEL.addEventListener('click', (e) => {
  dropdown.hidden = true;
  chatActionsDropdownMask.hidden = true;
  addUserModal.hidden = false;
  e.stopPropagation();
});

addUserModalMask.addEventListener('click', (e) => {
  addUserModal.hidden = true;
  e.stopPropagation();
});



