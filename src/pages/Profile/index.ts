import Block from '../../utils/Block';
import Baki from '../../utils/Baki';
import {tmpl} from './profile.tmpl';
import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile.scss';
import {authStore} from '../../store/auth.store';
import DOMWorker from '../../utils/DOMWorker';

interface Options {
    [key: string]: any,
}

class Profile extends Block {
    constructor() {
        super('div', tmpl, authStore.state.user);
    }

    render(): HTMLElement {
        if (DOMWorker.isInDom('.profile')) {
            DOMWorker.getEl('.profile').remove();
        }
        return new Baki(this.tmpl).compileTemplate(authStore.state.user);
    }

    componentDidMount(oldProps: Options): void {
        super.componentDidMount(oldProps);
        authStore.getUser().then(() => {
            this.setProps(authStore.state.user);
        });


        const rootEl = DOMWorker.getEl('#root');
        rootEl.addEventListener('click', (e) => {
            e.preventDefault();


            if (!(e.target instanceof HTMLElement)) {
                return;
            }

            if (e.target.dataset.name === 'logout') {
                authStore.logout().then(() => {
                    window.location.href = '/signin';
                });
            } else if (e.target.dataset.name === 'goback') {
                window.location.href = '/';
            } else if (e.target.dataset.name === 'change-data') {
                window.location.href = '/profile-user-data';
            } else if (e.target.dataset.name === 'change-password') {
                window.location.href = '/profile-password';
            }
        });
    }

}

export default Profile;
