import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './login.scss';
import DOMWorker from "../../utils/DOMWorker";
import Login from "./login";
import {tmpl} from "./login.tmpl";

const login = new Login(tmpl)
DOMWorker.append('#root', login.getContent());






