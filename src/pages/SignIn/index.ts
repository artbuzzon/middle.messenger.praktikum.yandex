import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './signin.scss';
import '../../components/Input/input.scss';
import Block from "../../utils/Block";
import {tmpl} from "./signin.tmpl";
import Baki from "../../utils/Baki";
import DOMWorker from "../../utils/DOMWorker";

interface Options {
    [key: string]: any,
}

export class SignIn extends Block {
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
          // @ts-ignore
            if (e.target.dataset.name === 'go-signup') {
                window.location.href = '/signup'
            }
        })
    }
}
