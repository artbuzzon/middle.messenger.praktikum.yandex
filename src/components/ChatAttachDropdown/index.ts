import './chat-attach-drowdown'
import './chat-attach-dropdown.scss'
import DOMWorker from "../../utils/DOMWorker";
import {tmpl} from "./chat-attach-dropdown.tmpl";
import ChatAttachDropdown from "./chat-attach-drowdown";

const chatAttachDropDown = new ChatAttachDropdown(tmpl)

DOMWorker.append('[data-name="chat-attach-actions"]', chatAttachDropDown.getContent());

const chatAttachBtnEl = DOMWorker.getEl('[data-name="chat-attach-actions"]');
const chatAttachDropdownMask = DOMWorker.getEl('[data-name="chat-attach-mask"]');

chatAttachDropDown.hide()

chatAttachDropdownMask.addEventListener('click', (e) => {
    e.stopPropagation();
    chatAttachDropDown.hide()
});

chatAttachBtnEl.addEventListener('click', (e) => {
    e.stopPropagation();
    chatAttachDropDown.show()
});
