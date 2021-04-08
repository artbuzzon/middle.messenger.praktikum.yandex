import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './signin.scss';
import DOMWorker from "../../utils/DOMWorker";
import {tmpl} from "./signin.tmpl";
import SignIn from "./signin";


const signIn = new SignIn(tmpl)
DOMWorker.append('#root', signIn.getContent());
