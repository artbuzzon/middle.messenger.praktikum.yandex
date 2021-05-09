import DOMWorker from './DOMWorker';
import Baki from './Baki';

interface Options {
    [key: string]: any,
}

export class NodeCreator {
    constructor(tmpl: string, root?: string) {
        this.root = root;
        this.node = document.createDocumentFragment();
        this.html = tmpl;
        return this;
    }

    node: DocumentFragment;
    root?: string;
    html: string;

    insertToDom(): void {
        if (this.root) {
            const domNode = DOMWorker.getEl(this.root);
            domNode.append(this.node);
        } else {
            throw new Error('No root defined in NodeCreator');
        }
    }


    createChild(data: Options): NodeCreator {
        const htmlWithData = this.getHtml(data);
        this.node.append(htmlWithData);
        return this;
    }

    getHtml(data: Options): HTMLElement {
        return new Baki(this.html).compileTemplate(data);
    }
}
