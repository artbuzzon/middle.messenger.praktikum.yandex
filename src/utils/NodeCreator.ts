import DOMWorker from './DOMWorker';
import Baki from './Baki';

interface ChatData {
    time: string,
    imgSrc: string,
    lastMessage: string,
    messagesCount: number,
    userName: string,
}


export class NodeCreator {
    constructor(root: string, tmpl: string) {
        this.root = root;
        this.node = document.createDocumentFragment();
        this.html = tmpl;
        return this;
    }

    node: DocumentFragment;
    root: string;
    html: string;

    insertToDom() {
        const domNode = DOMWorker.getEl(this.root);
        domNode.append(this.node);
    }

    htmlToElement(html: string): HTMLElement {
        const template = DOMWorker.createEl('template') as HTMLTemplateElement;
        html = html.trim();
        template.innerHTML = html;
        return <HTMLElement>template.content.firstChild;
    }

    createChild(data: ChatData) {
        const htmlWithData = this.getHtml(data);
        this.node.append(this.htmlToElement(htmlWithData));
        return this;
    }

    getHtml(data: ChatData) {
        return new Baki(this.html).compileTemplate(data);
    }
}
