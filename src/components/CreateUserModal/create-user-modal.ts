import Block from "../../utils/Block";
import Baki from "../../utils/Baki";

class CreateUserModal extends Block {
    constructor(tmpl: string, props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

}

export default CreateUserModal;




