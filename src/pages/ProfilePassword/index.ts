import 'styles/reset.scss';
import 'styles/fonts.scss';
import 'styles/global.scss';
import './profile-password.scss';
import {tmpl} from './profile-password.tmpl';
import Block from 'utils/Block';
import Baki from 'utils/Baki';

interface Options {
    [key: string]: any,
}

export class ProfilePassword extends Block {
    constructor(props: Options = {}) {
        super('div', tmpl, props);
    }

    render(): HTMLElement {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }
}

