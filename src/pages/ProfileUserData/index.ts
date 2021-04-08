import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile-user-data.scss';
import './profile-user-data';
import DOMWorker from "../../utils/DOMWorker";
import ProfileUserData from "./profile-user-data";
import {tmpl} from "./profile-user-data.tmpl";


const profileUserData = new ProfileUserData(tmpl)
DOMWorker.append('#root', profileUserData.getContent());

interface InputValue {
    [id: string]: string
}

const profileForm = DOMWorker.getEl('[data-name="profile-form"]') as HTMLFormElement;
profileForm.onsubmit = (e) => {
    e.preventDefault();
    console.log(Array.from(profileForm.elements).reduce((values, el: HTMLInputElement) => {
        if (el.value) {
            values.push({[el.id]: el.value});
        }
        return values;
    }, [] as InputValue[]));
};


