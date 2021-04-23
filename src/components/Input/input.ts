import Block from "../../utils/Block";
import Baki from "../../utils/Baki";
import DOMWorker from "../../utils/DOMWorker";
import Valuyadator from "../../utils/Валядатор";

class Input extends Block {
    _isValid: boolean;

    constructor(tmpl: string, props: Options = {}) {
        super('div', tmpl, props);
        this._isValid = false;
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

    componentDidUpdate(oldProps: Options) {
        if (!Valuyadator.validate(oldProps.value, this.props.type)) {
            this.showErrorMessage();
            this._isValid = false;
        } else {
            this.hideErrorMessage();
            this._isValid = true;
        }
        return true;
    }

    showErrorMessage() {
        DOMWorker.getEl(`[data-uuid="${this.props.errorMessageUuid}"]`).style.display = 'block';
    }

    hideErrorMessage() {
        if (document.querySelector(`[data-uuid="${this.props.errorMessageUuid}]"`))
            DOMWorker.getEl(`[data-uuid="${this.props.errorMessageUuid}]"`).style.display = 'none';
    }

}

export default Input;




