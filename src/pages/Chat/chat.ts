import Block from "../../utils/Block";
import Baki from "../../utils/Baki";
import {tmpl} from "./chat.tmpl";
import '../../styles/mixins.scss';
import '../../styles/reset.scss';
import '../../styles/fonts.scss';
import '../../styles/global.scss';
import './chat.scss';
import {authStore} from "../../store/auth.store";

class Chat extends Block {
    constructor(props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

    componentDidMount(oldProps: Options) {
        super.componentDidMount(oldProps);
        authStore.getUser();
    }

}

export default Chat;
