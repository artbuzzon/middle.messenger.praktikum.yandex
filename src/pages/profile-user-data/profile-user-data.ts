import tmpl from './profile-user-data.tmpl';
import {NodeCreator} from '../../utils/NodeCreator';
import DOMWorker from '../../utils/DOMWorker';

new NodeCreator('#root', tmpl).createChild().insertToDom();

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
