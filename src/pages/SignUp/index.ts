import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './signup.scss';
import {tmpl} from "./signup.tmpl";
import '../../components/Input/input.scss';
import Block from "../../utils/Block";
import Baki from "../../utils/Baki";


export class SignUp extends Block {
    constructor(props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }
}



