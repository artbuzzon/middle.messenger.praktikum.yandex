import './create-user-modal.scss';
import './create-user-modal';
import CreateUserModal from "./create-user-modal";
import {tmpl} from "./create-user-modal.tmpl";
import DOMWorker from "../../utils/DOMWorker";

const createUserModal = new CreateUserModal(tmpl)

DOMWorker.append('#root', createUserModal.getContent());
