import Hogan from '../../node_modules/hogan.js/lib/hogan';
import DOMWorker from './DOMWorker';

export class NodeCreator {
  constructor(root, tmpl, node = document.createDocumentFragment()) {
    this.root = root;
    this.node = node;
    this.html = tmpl;
    return this;
  }

  insertToDom() {
    const domNode = DOMWorker.getEl(this.root);
    domNode.append(this.node);
  }

  htmlToElement(html) {
    const template = DOMWorker.createEl('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  createChild(data = {}) {
    const htmlWithData = this.getHtml(data);
    this.node.append(this.htmlToElement(htmlWithData));
    return this;
  }

  getHtml(data) {
    const chatT = Hogan.compile(this.html);
    return chatT.render(data);
  }
}
