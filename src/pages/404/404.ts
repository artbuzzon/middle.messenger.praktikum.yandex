import Block from "../../utils/Block";
import Baki from "../../utils/Baki";

class Error404 extends Block {
    constructor(tmpl: string, props: Options = {}) {
        super('div', tmpl, props);
    }

    render() {
        return new Baki(this.tmpl).compileTemplate(this.props);
    }

}

export default Error404;
