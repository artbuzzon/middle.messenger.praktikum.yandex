import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile.scss';
import DOMWorker from "../../utils/DOMWorker";
import {tmpl} from "./profile.tmpl";
import Profile from "./profile";



const profile = new Profile(tmpl)
DOMWorker.append('#root', profile.getContent());




