import '../../styles/mixins.scss';
import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './chat.scss';
import DOMWorker from "../../utils/DOMWorker";
import Chat from "./chat";
import {tmpl} from "./chat.tmpl";


const chat = new Chat(tmpl)
DOMWorker.append('#root', chat.getContent());

import '../../components/ChatPreview/';
import '../../components/CreateUserModal/';
import '../../components/ChatActionsDropdown/';
import '../../components/ChatAttachDropdown/';



