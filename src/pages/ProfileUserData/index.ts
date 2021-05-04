import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './profile-user-data.scss';
import {tmpl} from "./profile-user-data.tmpl";
import '../../components/Input/input.scss';
import Block from "../../utils/Block";
import Baki from "../../utils/Baki";

export class ProfileUserData extends Block {
    constructor(props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }
}

