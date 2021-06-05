import 'styles/reset.scss';
import 'styles/fonts.scss';
import 'styles/global.scss';
import './profile-user-data.scss';
import {tmpl} from './profile-user-data.tmpl';
import Block from 'utils/Block';
import Baki from 'utils/Baki';

interface Options {
    [key: string]: any,
}

export class ProfileUserData extends Block {
    constructor(props: Options = {}) {
        super('div', tmpl, props);
    }

    render(): HTMLElement {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }
}

