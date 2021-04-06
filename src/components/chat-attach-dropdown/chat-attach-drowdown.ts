import {NodeCreator} from '../../utils/NodeCreator';
import tmpl from './chat-attach-dropdown.tmpl';
import DOMWorker from "../../utils/DOMWorker";

const chatAttachBtnEl = DOMWorker.getEl('[data-name="chat-attach-actions"]');

new NodeCreator('[data-name="chat-attach-actions"]',
    tmpl).createChild().insertToDom();

const dropdown = DOMWorker.getEl('[data-name="chat-attach-dropdown"]');
const chatAttachDropdownMask = DOMWorker.getEl('[data-name="chat-attach-mask"]');

dropdown.hidden = true;
chatAttachDropdownMask.hidden = true;

chatAttachDropdownMask.addEventListener('click', (e) => {
    dropdown.hidden = true;
    chatAttachDropdownMask.hidden = true;
    e.stopPropagation();
});

chatAttachBtnEl.addEventListener('click', (e) => {
    dropdown.hidden = false;
    chatAttachDropdownMask.hidden = false;
    e.stopPropagation();
});



