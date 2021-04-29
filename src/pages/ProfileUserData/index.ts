import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile-user-data.scss';
import {tmpl} from "./profile-user-data.tmpl";
import '../../components/Input/input.scss';
import Block from "../../utils/Block";
import Baki from "../../utils/Baki";
import DOMWorker from "../../utils/DOMWorker";

export class ProfileUserData extends Block {
    constructor(props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);
        const rootEl = DOMWorker.getEl('#root');
        rootEl.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.dataset.name === 'goback') {
                window.location.href = '/profile'
            }
        })
    }
}

