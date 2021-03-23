import {NodeCreator} from '../../utils/NodeCreator';
import tmpl from './chat-actions-dropdown.tmpl';
import DOMWorker from '../../utils/DOMWorker';

new NodeCreator('[data-name="chat-actions"]',
    tmpl).createChild().insertToDom();

const elementsToGet = [
  '[data-name="chat-actions"]',
  '[data-name="chat-actions-dropdown"]',
  '[data-name="chat-actions-mask"]',
  '[data-name="create-user-modal"]',
  '[data-name="create-user-modal-mask"]',
  '[data-name="chat-dropdown__add-user"]',
];

const [
  chatActionsEl,
  dropdown,
  chatActionsDropdownMask,
  addUserModal,
  addUserModalMask,
  chatDropdownAddUserBtnEL,
] = DOMWorker.getEls(elementsToGet);

dropdown.hidden = true;
chatActionsDropdownMask.hidden = true;
addUserModal.hidden = true;

chatActionsDropdownMask.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.hidden = true;
  chatActionsDropdownMask.hidden = true;
});

chatActionsEl.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.hidden = false;
  chatActionsDropdownMask.hidden = false;
});

chatDropdownAddUserBtnEL.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.hidden = true;
  chatActionsDropdownMask.hidden = true;
  addUserModal.hidden = false;
});

addUserModalMask.addEventListener('click', (e) => {
  e.stopPropagation();
  addUserModal.hidden = true;
});



