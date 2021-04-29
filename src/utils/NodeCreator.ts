import DOMWorker from './DOMWorker';
import Baki from './Baki';

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

    insertToDom() {
        if (this.root) {
            const domNode = DOMWorker.getEl(this.root);
            domNode.append(this.node);
        } else {
            throw new Error('No root defined in NodeCreator')
        }
    }

    htmlToElement(html: string): HTMLElement {
        const template = DOMWorker.createEl('template') as HTMLTemplateElement;
        html = html.trim();
        template.innerHTML = html;
        return <HTMLElement>template.content.firstChild;
    }

    createChild(data: Options) {
        const htmlWithData = this.getHtml(data);
        this.node.append(this.htmlToElement(htmlWithData));
        return this;
    }

    getHtml(data: Options) {
        return new Baki(this.html).compileTemplate(data);
    }
}
