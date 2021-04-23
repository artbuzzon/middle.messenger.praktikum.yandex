import './chat-actions-drowdown'
import './chat-actions-dropdown.scss'
import DOMWorker from "../../utils/DOMWorker";
import ChatActionsDropdown from "./chat-actions-drowdown";
import {tmpl} from "./chat-actions-dropdown.tmpl";

const chatActionsDropdown = new ChatActionsDropdown(tmpl)

DOMWorker.append('[data-name="chat-actions"]', chatActionsDropdown.getContent());


const elementsToGet = [
    '[data-name="chat-actions"]',
    '[data-name="chat-actions-mask"]',
    '[data-name="create-user-modal"]',
    '[data-name="create-user-modal-mask"]',
    '[data-name="chat-dropdown__add-user"]',
];

const [
    chatActionsEl,
    chatActionsDropdownMask,
    addUserModal,
    addUserModalMask,
    chatDropdownAddUserBtnEL,
] = DOMWorker.getEls(elementsToGet);

chatActionsDropdown.hide();
addUserModal.hidden = true;

chatActionsDropdownMask.addEventListener('click', (e) => {
    e.stopPropagation();
    chatActionsDropdown.hide()
});

chatActionsEl.addEventListener('click', (e) => {
    e.stopPropagation();
    chatActionsDropdown.show()
});

chatDropdownAddUserBtnEL.addEventListener('click', (e) => {
    e.stopPropagation();
    addUserModal.hidden = false;
    chatActionsDropdown.hide()
});

addUserModalMask.addEventListener('click', (e) => {
    e.stopPropagation();
    addUserModal.hidden = true;
});
